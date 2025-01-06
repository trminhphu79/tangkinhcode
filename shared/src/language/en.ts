import { KeyLanguage } from './key';

export const EngLanguage = Object.freeze({
  [KeyLanguage.login]: 'Login',
  [KeyLanguage.findScriptures]: 'Find scriptures',
  [KeyLanguage.findGuilds]: 'Find guilds',
  [KeyLanguage.signIn]: 'Sign In',
  [KeyLanguage.or]: 'Or',
  [KeyLanguage.signUp]: 'Sign Up',
  [KeyLanguage.youHadAccount]: 'Already have an account?',
  [KeyLanguage.youNotHadAccount]: "Don't have an account yet?",
  [KeyLanguage.english]: 'English',
  [KeyLanguage.vietnamese]: 'Vietnamese',
  [KeyLanguage.signOut]: 'Sign out',
  [KeyLanguage.profile]: 'Profile',
  [KeyLanguage.invalidEmail]: 'Invalid email address',
  [KeyLanguage.passwordMustAtLeast8Char]:
    'Password must be at least 8 characters',
  [KeyLanguage.passwordMustContains1Number]:
    'Password must contains at least 1 number',
  [KeyLanguage.confirmPasswordDoesnotMatch]: 'Confirm password does not match',
  [KeyLanguage.email]: 'Email',
  [KeyLanguage.password]: 'Password',
  [KeyLanguage.confirmPassword]: 'Confirm password',
  [KeyLanguage.verifyEmail]: 'Verify email',
  [KeyLanguage.weHaveSentYouAnVerificationEmail]:
    'We have sent you an verification email. Please check it!',
  [KeyLanguage.resendEmailMessage]:
    "Click {0} if you didn't see any email. But make sure to check your spam!",
  [KeyLanguage.resendEmailLink]: 'here',
  [KeyLanguage.resendEmailWait]: 'Please wait {0} before resending',
});
