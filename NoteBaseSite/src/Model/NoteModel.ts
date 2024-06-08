import type { UUID } from "crypto";
import type { TagModel } from "./TagModel";

export type NoteModel = {
  id: UUID;
  title: string;
  text: string;
  personId: UUID;
  categoryId: UUID;
  tagList: [TagModel];
};