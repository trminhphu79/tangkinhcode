import {
  Pipe,
  PipeTransform,
  ChangeDetectorRef,
  OnDestroy,
  NgZone,
  signal,
} from '@angular/core';
@Pipe({
  name: 'timeAgo',
  pure: false,
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private currentValue!: string;
  private timer: any;
  private defaultIntervalTime = signal<number>(30000);
  private inputDate: Date | null = null;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  transform(value: Date | string | number, intervalTime?: number): string {
    if (!value) return '';

    this.inputDate = new Date(value);
    this.currentValue = this.calculateTimeAgo(this.inputDate as Date);
    if (intervalTime) {
      this.defaultIntervalTime.set(intervalTime);
    }

    this.clearTimer();
    this.schedualUpdateTask();
    return this.currentValue;
  }

  private schedualUpdateTask() {
    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this.currentValue = this.calculateTimeAgo(this.inputDate as Date);
        this.cdr.markForCheck();
      }, this.defaultIntervalTime());
    });
  }

  private calculateTimeAgo(date: Date): string {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    if (minutes < 1) {
      return 'Just now';
    } else if (minutes < 60) {
      return `${minutes} ${minutes == 1 ? 'min' : 'mins'} ago`;
    } else if (hours < 24) {
      return `${hours} ${hours == 1 ? 'hour' : 'hours'} ago`;
    } else if (days < 7) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
      return this.formatDate(date);
    }
  }

  private formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-GB', options).replace(',', '');
  }

  private clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  ngOnDestroy(): void {
    this.clearTimer(); // Clean up the interval when the pipe is destroyed
  }
}
