export type Agent = {
  uuid: string;
  displayName: string;
  description: string;
  isPlayableCharacter: boolean;
  displayIconSmall: string;
  displayIcon: string;
  fullPortrait: string;
  role: any;
  abilities: {
    description: string
    map: Function;
  }
};
