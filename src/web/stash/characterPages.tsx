import { Character } from "../../scripts/character/types";
import { Page } from "../../scripts/stash/types";
import {
  ItemLocation,
  ItemStorageType,
} from "../../scripts/items/types/ItemLocation";
import { Item } from "../../scripts/items/types/Item";

const PAGE_NAMES = [
  "Equipped",
  "Inventory",
  "Cube",
  "Belt",
  "Stash",
  "Unknown",
] as const;

type PageName = typeof PAGE_NAMES[number];

function findPage(item: Item): PageName {
  switch (item.location) {
    case ItemLocation.STORED:
      switch (item.stored) {
        case ItemStorageType.STASH:
          return "Stash";
        case ItemStorageType.INVENTORY:
          return "Inventory";
        case ItemStorageType.CUBE:
          return "Cube";
        case ItemStorageType.NONE:
          return "Unknown";
      }
      throw new Error(`Unknown storage type ${item.stored}`);
    case ItemLocation.BELT:
      return "Belt";
    case ItemLocation.EQUIPPED:
      return "Equipped";
    case ItemLocation.SOCKET:
    case ItemLocation.CURSOR:
      return "Unknown";
  }
}

export function characterPages(
  character: Character,
  ignoreStash: boolean
): Page[] {
  const pages = new Map<PageName, Page>();
  function addItem(page: PageName, item: Item) {
    let existing = pages.get(page);
    if (!existing) {
      existing = { name: page, items: [] };
      pages.set(page, existing);
    }
    existing.items.push(item);
  }

  for (const item of character.items) {
    addItem(findPage(item), item);
  }

  return PAGE_NAMES.map((name) => pages.get(name)).filter(
    (page): page is Page => !!page && (!ignoreStash || page.name !== "Stash")
  );
}
