export type SettingsDatabaseType = {
  MySqliteDirectory: string;
  DatabaseBackupDirectory: string;
  Type: 'SQLite' | 'MySQL' | 'SQLServer';
  Username: string;
  Password: string;
  Schema: string;
  Hostname: string;
  SQLite_DatabaseFile: string;
};

export type SettingsAnidbLoginType = {
  Username: string;
  Password: string;
};

export type SettingsAnidbType = {
  AVDumpKey: string;
  ClientPort: number;
  AVDumpClientPort: number;
};

export type SettingsAnidbDownloadType = {
  DownloadCharacters: boolean;
  DownloadCreators: boolean;
  DownloadRelatedAnime: boolean;
  MaxRelationDepth: number;
};

// Delete, DeleteLocalOnly, MarkDeleted, MarkExternalStorage, MarkUnknown, MarkDisk
export type MyListDeleteType = 0 | 1 | 2 | 3 | 4 | 5;
// Unknown, HDD, Disk, Deleted, Remote
export type MyListStorageState = 0 | 1 | 2 | 3 | 4;

export type SettingsAnidbMylistType = {
  MyList_AddFiles: boolean;
  MyList_DeleteType: MyListDeleteType;
  MyList_ReadUnwatched: boolean;
  MyList_ReadWatched: boolean;
  MyList_SetUnwatched: boolean;
  MyList_SetWatched: boolean;
  MyList_StorageState: MyListStorageState;
};

// Never = 1, HoursSix = 2, HoursTwelve = 3, Daily = 4, WeekOne = 5, MonthOne = 6
export type SettingsUpdateFrequencyType = 1 | 2 | 3 | 4 | 5 | 6;

export type SettingsAnidbUpdateType = {
  Calendar_UpdateFrequency: SettingsUpdateFrequencyType;
  Anime_UpdateFrequency: SettingsUpdateFrequencyType;
  MyList_UpdateFrequency: SettingsUpdateFrequencyType;
  MyListStats_UpdateFrequency: SettingsUpdateFrequencyType;
  File_UpdateFrequency: SettingsUpdateFrequencyType;
};

export type SettingsTvdbDownloadType = {
  AutoFanart: boolean;
  AutoPosters: boolean;
  AutoWideBanners: boolean;
  AutoLink: boolean;
};

export type SettingsTvdbLanguageType = 'zh' | 'en' | 'sv' | 'no' | 'da' | 'fi' | 'nl' | 'de' | 'it' | 'es' | 'fr' | 'pl' | 'hu' | 'el' | 'tr' | 'ru' | 'he' | 'ja' | 'pt' | 'cs' | 'sl' | 'hr' | 'ko';

export type SettingsTvdbPrefsType = {
  AutoFanartAmount: number;
  AutoPostersAmount: number;
  AutoWideBannersAmount: number;
  Language: SettingsTvdbLanguageType;
  UpdateFrequency: SettingsUpdateFrequencyType;
};

export type SettingsTraktType = {
  Enabled: boolean;
  TokenExpirationDate: string;
  UpdateFrequency: SettingsUpdateFrequencyType;
  SyncFrequency: SettingsUpdateFrequencyType;
};

export type SettingsMoviedbType = {
  AutoFanart: boolean;
  AutoFanartAmount: number;
  AutoPosters: boolean;
  AutoPostersAmount: number;
};

export type SettingsPlexType = {
  Libraries: Array<number>;
  Token: string;
  Server: string;
};

export type SettingsLogRotatorType = {
  Enabled: boolean;
  Zip: boolean;
  Delete: boolean;
  Delete_Days: string;
};

export type SettingsImportType = {
  MoveOnImport: boolean;
  RenameOnImport: boolean;
  RenameThenMove: boolean;
  RunOnStart: boolean;
  UseExistingFileWatchedStatus: boolean;
};

export type SettingsServerType = {
  WebUI_Settings: string;
  FirstRun: boolean;
  Database: SettingsDatabaseType;
  AniDb: SettingsAnidbLoginType & SettingsAnidbType & SettingsAnidbDownloadType
  & SettingsAnidbMylistType & SettingsAnidbUpdateType;
  TvDB: SettingsTvdbDownloadType & SettingsTvdbPrefsType;
  MovieDb: SettingsMoviedbType;
  TraktTv: SettingsTraktType;
  Plex: SettingsPlexType;
  LogRotator: SettingsLogRotatorType;
  GA_OptOutPlzDont: boolean;
  AutoGroupSeries: boolean;
  AutoGroupSeriesUseScoreAlgorithm: boolean;
  AutoGroupSeriesRelationExclusions: string;
  LanguagePreference: Array<string>;
  LanguageUseSynonyms: boolean;
  Import: SettingsImportType;
};
