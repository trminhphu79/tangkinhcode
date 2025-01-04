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
});
