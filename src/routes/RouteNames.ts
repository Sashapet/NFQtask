export enum ROUTES {
  Main = 'main',

  // Tabs
  Explore = 'explore',
  Activity = 'activity',
  Plan = 'plan',
  Profile = 'profile',

  // Login flow
  Welcome = 'welcome',
  Login = 'login',
  ForgotPassword = 'forgotPassword',
  Quiz = 'quiz',
  Calculating = 'calculating',
  QuizEmail = 'quizEmail',
  Summary = 'summary',
  Checkout = 'checkout',
  Register = 'register',
  ExtendMembership = 'extendMembership',
  Success = 'success',

  // Profile flow
  MyProfile = 'myProfile',
  MyDetails = 'myDetails',
  Weight = 'weight',
  Steps = 'steps',
  Water = 'water',
  ChangeName = 'changeName',
  ChangePassword = 'changePassword',
  Help = 'help',
  Settings = 'settings',
  ChangeUnits = 'changeUnits',
  Selection = 'selection',

  // Workouts flow
  WorkoutCategory = 'workoutCategory',
  WorkoutInfo = 'workoutInfo',
  WorkoutPlan = 'workoutPlan',
  WorkoutSettings = 'workoutSettings',
  Workout = 'workout',
  WorkoutComplete = 'workoutComplete',
  RateWorkout = 'rateWorkout',

  // States
  NoNetwork = 'noNetwork',
}
