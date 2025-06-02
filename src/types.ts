import { IconType } from 'react-icons';

export type StyleKey = 'blue' | 'red' | 'green' | 'yellow';

export interface StyleMeta {
  color: string;
  label: string;
  accent: string;
  icon: IconType;
  bg: string;
  title: string;
  desc: string;
}

export interface AssessmentOption {
  color: StyleKey;
  option: string;
}

export interface AssessmentCategory {
  category: string;
  description: string;
  options: AssessmentOption[];
}

export interface StyleInfo {
  description: string;
  strengths: string[];
  blindSpots: string[];
  tips: string[];
  selfView: string;
  othersView: string;
  adapting: string[];
  recommendation: string;
}

export interface MultiWinnersInfo {
  intro: string[];
  recommendation: string;
}
