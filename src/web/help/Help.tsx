import "./Help.css";
import { ExternalLink } from "../routing/ExternalLink";

export function Help() {
  // TODO: expand/collapse
  return (
    <>
      <h2 class="faq-question">I'm new here, what's this website?</h2>
      <div class="faq-answer">
        <p>
          This tool is a collection manager for all of your single-player items
          in Diablo 2. You <a href="#saves">select your save folder</a>, the
          tool reads every single character file and stash in it, turning it
          into an <a href="#collection">easily searchable collection</a>. When
          searching for an item, the tool gives a precise location to help you
          find it: "Worn by Hammerdin's Mercenary", or "In Fishymancer's Cube".
        </p>
        <p>
          You can also use this website as a replacement for GoMule. It allow
          you to{" "}
          <a href="#transfer">transfer items from one character to another</a>,
          either in bulk or a few at a time, and gives you the updated save
          files to download. It can also create an off-game stash to store as
          many items as you need if you do not have enough mules.
        </p>
        <p>
          If you are more of a PlugY fan than GoMule, this tool is fully
          PlugY-compatible. If your save folder contains PlugY stashes, these
          are fully parsed too. And it offers a feature to{" "}
          <a href="#organize">fully sort and organize</a> your PlugY stash in
          one click, no matter how many items you hoarded.
        </p>
        <p>
          Finally, this website also serves as a{" "}
          <a href="#grail-tracker">Grail tracker</a> that you never have to
          manually update. Simply refresh your save files and you will
          immediately see your progress.
        </p>
      </div>

      <h2 class="faq-question">
        When you say "easily searchable", what can I search for?
      </h2>
      <div class="faq-answer">
        <p>When searching in your collection, you can search for:</p>
        <ul>
          <li>Item names: "Tal Rasha"</li>
          <li>Modifiers: "All res"</li>
          <li>Number of sockets: "3 sockets"</li>
          <li>Items in sockets: "Rainbow Facet"</li>
        </ul>
        <p>
          When searching on a character, you can also search for a specific
          location, like "Equipped" or "Mercenary". When searching in a stash,
          you can search for a specific page, like "Shared page 42".
        </p>
        <p>
          Finally, like most search tools, using double-quotes " will force a
          perfect match. You can combine this to create advanced searches like:
        </p>
        <blockquote>"4 sockets" "15% enhanced"</blockquote>
      </div>

      <h2 class="faq-question">Where am I uploading my save files?</h2>
      <p class="faq-answer">
        Nowhere! Your data is yours, this website does not send anything to the
        server. In fact, once the page has been loaded, the tool works fully
        offline if you want to. If you're not convinced, the entire source code
        for this project is{" "}
        <ExternalLink href="https://github.com/youdz/d2-stash-organizer">
          open-source on GitHub
        </ExternalLink>
        .
      </p>

      <h2 class="faq-question">Is this compatible with PlugY?</h2>
      <p class="faq-answer">
        Not only is it fully compatible with PlugY stashes, it also lets you{" "}
        <a href="#organize">fully sort and organize</a> them in one click. We
        all know how long we've been putting off cleaning our stash, well now we
        don't have to!
      </p>

      <h2 class="faq-question">
        How will this sort my very large PlugY stash?
      </h2>
      <div class="faq-answer">
        <p>
          That's a pretty long answer, but you asked for it. Not that you cannot
          configure the sort order, but you can tell the organizer to leave
          untouched any number of pages at the start of your stash, or tell it
          to add extra empty pages at the beginning.
        </p>
        <ol>
          <li>Rejuvenation potions</li>
          <li>Essences and tokens</li>
          <li>Organs and keys</li>
          <li>
            Gems: every gem type gets its own page(s), each page sorted by grade
            of gem (from chipped to perfect)
          </li>
          <li>
            Runes by rank, with an empty line between each rank for clarity
          </li>
          <li>Bases (white and grey items), ordered by:</li>
          <ol>
            <li>Equipment type (same order as the equipment sections below)</li>
            <li>
              Within each equipment type, sorted by descending{" "}
              <ExternalLink href="http://classic.battle.net/diablo2exp/items/basics.shtml#qlevel">
                qlevel
              </ExternalLink>{" "}
              (meaning Sacred Armor first and Quilted Armor last, for instance)
            </li>
            <li>
              Within each qlevel, sorted by number of sockets (useful if you
              have 12 Crystal Swords)
            </li>
          </ol>
          <li>Runewords sorted by level requirement</li>
          <li>
            For each type of possibly unique item (rings, amulets, charms,
            jewels, armor, helms, gloves, ...):
          </li>
          <ol>
            <li>
              One of each unique displayed in "grail mode", one page per tier
              (normal, exceptional, elite) if they don't fit on one page
            </li>
            <li>One of each eth unique displayed in "grail mode"</li>
            <li>Duplicate uniques sorted by descending qlevel</li>
            <li>Rares sorted by descending qlevel</li>
            <li>Magic items sorted by descending qlevel</li>
          </ol>
          <li>For each set:</li>
          <ol>
            <li>A first pretty page with the set fully laid out</li>
            <li>
              Duplicate items of the same set, grouped by which piece it is,
              just laid out in line
            </li>
          </ol>
        </ol>
        {/* TODO: add images */}
      </div>

      <h2 class="faq-question">
        Is this compatible with Diablo 2 Resurrected?
      </h2>
      <p class="faq-answer">
        As soon as a single dev with limited free time can handle it. It's
        obviously the current highest priority.
      </p>

      <h2 class="faq-question">Can this be used to edit, hack or mod items?</h2>
      <p class="faq-answer">
        The tool does not have the capability to modify item stats, skills or
        properties. The only fields that can be modified at the moment are the
        ones related to the item's location.
      </p>

      <h2 class="faq-question">How do I transfer many items at once?</h2>
      <p class="faq-answer">
        Go to <a href="#collection">your collection</a> or a specific{" "}
        <a href="#characters">character or stash page</a>. Search for the items
        you want (or do not search if you want to transfer all items), and click
        the "Select all items" button. This will select all items returned by
        the search. After that, simply go to the{" "}
        <a href="#characters">transfer page</a> and select where you want to
        send them.
      </p>

      <h2 class="faq-question">
        How do I transfer all items in a single stash page?
      </h2>
      <p class="faq-answer">
        Go to <a href="#characters">that stash</a>, and search for the exact
        page name (for instance, "Shared Page 42"). Click the "Select all items"
        button, the <a href="#characters">transfer page</a> will now transfer
        exactly the items in that page.
      </p>

      <h2 class="faq-question">How do I get help or report a bug?</h2>
      <div class="faq-answer">
        <p>
          First, check if someone else already{" "}
          <ExternalLink href="https://github.com/youdz/d2-stash-organizer/issues">
            asked that question or reported the bug on GitHub
          </ExternalLink>
          . If you don't find your answer, go ahead and{" "}
          <ExternalLink href="https://github.com/youdz/d2-stash-organizer/issues/new">
            submit an issue
          </ExternalLink>{" "}
          for it.
        </p>
        <p>
          If you do not have a GitHub account and do not want to create one,
          which is completely understandable, you can reach out to me on{" "}
          <ExternalLink href="https://twitter.com/EudesPV">
            Twitter
          </ExternalLink>{" "}
          or{" "}
          <ExternalLink href="https://www.reddit.com/user/EudesPV/">
            Reddit
          </ExternalLink>
        </p>
      </div>
    </>
  );
}