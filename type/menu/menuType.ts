export interface menuType {
  seq: number;
  parentSeq: number | null;
  menu: string;
  url: string;
  title: string;
  hasChild: string;
  depth: number;
  sort: number;
}
