import { Item } from "../../scripts/items/types/Item";
import { isStash, ItemsOwner } from "../../scripts/save-file/ownership";
import { Stash } from "../../scripts/stash/types";
import { Character } from "../../scripts/character/types";
import { ItemStorageType } from "../../scripts/items/types/ItemLocation";

function stringifyPage(items: Item[]) {
  let result = "";
  for (const item of items) {
    result += item.raw;
    for (const socket of item.filledSockets ?? []) {
      result += socket.raw;
    }
  }
  return result;
}

export function findDuplicates(owners: ItemsOwner[]) {
  const byString = new Map<string, [Stash, number]>();
  for (const owner of owners) {
    if (isStash(owner)) {
      owner.pages.forEach((page, i) => {
        byString.set(stringifyPage(page.items), [owner, i]);
      });
    }
  }

  const duplicates = new Map<Character, [Stash, number]>();
  for (const owner of owners) {
    if (!isStash(owner)) {
      const duplicate = byString.get(
        stringifyPage(
          owner.items.filter(({ stored }) => stored === ItemStorageType.STASH)
        )
      );
      if (duplicate) {
        duplicates.set(owner, duplicate);
      }
    }
    return duplicates;
  }
}
