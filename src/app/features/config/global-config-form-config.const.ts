import { MISC_SETTINGS_FORM_CFG } from './form-cfgs/misc-settings-form.const';
import { KEYBOARD_SETTINGS_FORM_CFG } from './form-cfgs/keyboard-form.const';
import { ConfigFormConfig } from './global-config.model';
import { POMODORO_FORM_CFG } from './form-cfgs/pomodoro-form.const';
import { IDLE_FORM_CFG } from './form-cfgs/idle-form.const';
import { TAKE_A_BREAK_FORM_CFG } from './form-cfgs/take-a-break-form.const';
import { IMEX_FORM } from './form-cfgs/imex-form.const';
import { LANGUAGE_SELECTION_FORM_FORM } from './form-cfgs/language-selection-form.const';
import { EVALUATION_SETTINGS_FORM_CFG } from './form-cfgs/evaluation-settings-form.const';
import { SIMPLE_COUNTER_FORM } from './form-cfgs/simple-counter-form.const';
import { SOUND_FORM_CFG } from './form-cfgs/sound-form.const';
import { TRACKING_REMINDER_FORM_CFG } from './form-cfgs/tracking-reminder-form.const';
import { SYNC_FORM } from './form-cfgs/sync-form.const';
import { IS_ELECTRON } from '../../app.constants';
import { IS_ANDROID_WEB_VIEW } from '../../util/is-android-web-view';
import { TIMELINE_FORM_CFG } from './form-cfgs/timeline-form.const';
import { DOMINA_MODE_FORM } from './form-cfgs/domina-mode-form.const';
import { FOCUS_MODE_FORM_CFG } from './form-cfgs/focus-mode-form.const';
import { IS_FIREFOX } from '../../util/is-firefox';
import { CALENDAR_FORM_CFG } from './form-cfgs/calendar-form.const';
import { REMINDER_FORM_CFG } from './form-cfgs/reminder-form.const';

export const GLOBAL_CONFIG_FORM_CONFIG: ConfigFormConfig = [
  LANGUAGE_SELECTION_FORM_FORM,
  MISC_SETTINGS_FORM_CFG,
  IDLE_FORM_CFG,
  KEYBOARD_SETTINGS_FORM_CFG,
  TRACKING_REMINDER_FORM_CFG,
  CALENDAR_FORM_CFG,
  REMINDER_FORM_CFG,
  TIMELINE_FORM_CFG,
  SOUND_FORM_CFG,
].filter((cfg) => IS_ELECTRON || !cfg.isElectronOnly);

export const GLOBAL_SYNC_FORM_CONFIG: ConfigFormConfig = [
  SYNC_FORM,
  // NOTE: the backup form is added dynamically due to async prop required
  ...(IS_ANDROID_WEB_VIEW ? [] : [IMEX_FORM]),
].filter((cfg) => IS_ELECTRON || !cfg.isElectronOnly);

export const GLOBAL_PRODUCTIVITY_FORM_CONFIG: ConfigFormConfig = [
  FOCUS_MODE_FORM_CFG,
  TAKE_A_BREAK_FORM_CFG,
  POMODORO_FORM_CFG,
  EVALUATION_SETTINGS_FORM_CFG,
  SIMPLE_COUNTER_FORM,
  ...(!window.ea?.isSnap() && !IS_FIREFOX ? [DOMINA_MODE_FORM] : []),
].filter((cfg) => IS_ELECTRON || !cfg.isElectronOnly);
