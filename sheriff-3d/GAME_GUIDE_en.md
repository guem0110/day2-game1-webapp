# 🤠 Badge of the Frontier - Hold the Town, Sheriff!
## Complete Game Guide (version 1.8)

> Formerly "Sheriff 3D Showdown"

> A third-person 3D Western shooter: defend the town from outlaw gangs and take down their bosses.
> The whole game is one HTML file (`index.html`) built on Three.js r128. Music and sound effects are synthesized in the browser, with no audio files.
> It runs on PC (keyboard and mouse) and on phones (touch, landscape or portrait), in Korean or English.
> Korean version: [GAME_GUIDE.md](GAME_GUIDE.md)

---

## Contents
1. [Where to play](#1-where-to-play)
2. [Start screen](#2-start-screen)
3. [Controls](#3-controls)
4. [Game modes](#4-game-modes)
5. [12 stages](#5-12-stages)
6. [Outlaws and bosses](#6-outlaws-and-bosses)
7. [Weapons, mounts, armor and relics](#7-weapons-mounts-armor-and-relics)
8. [Progress and rewards](#8-progress-and-rewards)
9. [Playing with friends](#9-playing-with-friends)
10. [Style](#10-style)
11. [Convenience and settings](#11-convenience-and-settings)
12. [Leaderboards](#12-leaderboards)
13. [Android app and release](#13-android-app-and-release)
14. [Version history](#14-version-history)
15. [Files](#15-files)

---

## 1. Where to play

| Where | Notes |
|---|---|
| claude.ai game link | Shared leaderboards, 👥 multiplayer (up to 4), friend raids and friend ghosts. Friends can open it once the game owner invites them from the Share menu. |
| `index.html` file | Download it and open it in a browser. Records stay on that device. Needs an internet connection (Three.js loads from a CDN). |
| Android app (`app/`) | A Capacitor app that works offline, with Firebase online leaderboards, notifications and sharing. |

---

## 2. Start screen

The start screen is split into three big branches so new players don't get lost.

| Button | What's inside |
|---|---|
| ▶ **Go!** | Jump straight into the mode (and difficulty) you played last |
| ⚔️ **Fight** | Classic · Endless mutation · Weekly event · Weekly boss rush · Daily rule, difficulty and role, 🗼 Boss tower, 🌟 Boss of the month, 🌙 Night raid, 💾 Continue |
| 🃏 **Challenges** | 📖 Story mode · 🃏 Card adventure · 🗺 Bounty map · 🎯 Practice range |
| 🏇 **Play** | 🏇 Mount race · 🔔 Duel · 🎣 Break games · 👥 Multiplayer · 📇 Friends · 🏆 Friend league · 🎁 Invite · 🐉 Friend raid |
| 📅 Journal · 📬 Mailbox · 🛒 Shop | Check-in, today's to-do list and challenges / a record of rewards / supplies, style, garage, season pass, office |
| ☰ More | Records, settings, bestiary, bag and more |

- **Sheriff rank** (🥉 Bronze → 🥈 Silver → 🥇 Gold → 💎 Diamond → 👑 Legend): every mode adds to it.
- **💡 Up next**: during the first few games it suggests what to try. After that it shows ⭐ Today's pick.
- New sheriffs unlock features as they level up: duel, cards and bounty map at Lv2; endless and race at Lv3; daily rule, event and season pass at Lv4; boss rush and tower at Lv5.

---

## 3. Controls

### PC
| Key | Action |
|---|---|
| W A S D / arrow keys | Move |
| Mouse | Look and aim (click the screen to lock the mouse) |
| Click | Shoot (hold for automatic weapons) |
| R | Reload |
| Number keys / mouse wheel | Switch weapon |
| Shift | 💨 Roll (0.4 s invincible, every 3 s); dash while riding |
| F / C / Space | Ride or dismount / change mount / mount skill |
| T / G | Place a 🪤 bear trap / 🛢 powder keg |
| Tab · B · P · O | Bag · bestiary · 1st/3rd person · photo mode |
| V | ⏩ Auto-advance waves |
| Z / X | 💬 Quick chat / 📍 ping (multiplayer) |
| M · Esc | Music · pause |

Keys can be remapped in Settings.

### Phone
- Drag on the left side to move. The joystick's position, size and opacity are adjustable.
- Drag on the right side to look around.
- Auto-fire shoots when an enemy is under the crosshair. Its strength is adjustable.
- Buttons: fire, reload, weapon, mount, dodge and skill.
- Also available: 👆 one-hand mode (right or left), 📏 big buttons, 📳 vibration strength, 🔋 battery saver, and movable buttons.

---

## 4. Game modes

### ⚔️ Fight
| Mode | What it is |
|---|---|
| 🤠 Classic | Survive wave after wave. A boss every 5 waves, plus occasional missions, hostage rescues and surprise events |
| 🧬 Endless mutation | Outlaws gain a new mutation every 5 waves (faster, tougher and so on) |
| 🎉 Weekly event | 7 rotating weekly rules: Cactus week, Sky raid, Twin week, Midnight raid, Week of giants, Gold rush and Swarm raid. Coins are doubled |
| ⚔️ Weekly boss rush | This week's 9 bosses back to back, ranked by clear time |
| 🎰 Daily rule | 8 rotating daily rules: Headshots only, Double outlaws, Moon gravity, Fast forward, Explosive world, Mount festival, Glass cannon and Gold rain |
| 🗼 Boss tower | A boss on every floor and a card between floors, ranked by how high you climb |
| 🌟 Boss of the month | A golden boss that changes monthly, with ×1.3 health and phase 2 from the start. The first win each month pays 💰300 |
| 🌙 Night raid | Only your lantern lights the town. Survive 10 waves until 🌅 dawn. Has its own leaderboard |

- **Difficulty**: 🌵 Easy · 🤠 Normal · 🔥 Hard · 💀 Hell
- **Roles**: 🤠 Basic · 🪖 Assault · 🎯 Sniper · ⛑ Medic · 🔧 Engineer

### 🃏 Challenges
| Mode | What it is |
|---|---|
| 📖 Story mode | **Part 1, "The Sheriff's Journal" (10 chapters), and Part 2, "The Shadow Sheriff" (10 chapters).** Each chapter is 3 waves plus that stage's boss, with dialogue and 1–3 stars. Part 2 opens after Part 1. Chapter 20 ends with the final boss, "Shadow Sheriff Black Badge" |
| 🃏 Card adventure | Pick 1 of 3 cards each wave. 23 cards with set bonuses. Has its own leaderboard |
| 🗺 Bounty map | 40 short challenges across 2 maps; collect the stars |
| 🎯 Practice range | Tutorial, dummies and boss-dodging practice |

### 🏇 Play
| Mode | What it is |
|---|---|
| 🏇 Mount race | 5 courses (Desert loop, Canyon petals, Snowy serpent, Mine tunnels and Rail dash). CPU riders, your own ghost or a 👥 friend's ghost, race items, 2 🏆 Grand Prix cups, a weekly challenge and replays |
| 🔔 Duel | Shoot first when the signal shows. Shooting early is a foul |
| 🎣 Break games | One-minute target shooting or fishing |
| 🐉 Friend raid | Everyone wears down one shared boss's health over the week, 90 seconds per run. Taking it down pays 💰500 |

---

## 5. 12 stages

In Classic, the stage changes every 5 waves. After wave 60 the cycle starts over.

| Waves | Stage | Time | Stage bosses | Feature |
|---|---|---|---|---|
| 1–5 | Golden desert | Noon | Rattlesnake / Cactus golem | Sandstorms |
| 6–10 | Red canyon | Sunset | Mad miner / Giant eagle | Rock pillars |
| 11–15 | Western town | Night | Blackjack / Train gang | Buildings and barrels |
| 16–20 | Volcano mine | Sunset | Volcano giant / Cactus golem | Lava rocks |
| 21–25 | Snowy pass | Morning | Raging bull / Mad miner | Blizzards |
| 26–30 | Haunted graveyard | Night | Ghost gunslinger / Blackjack | Tombstones and fog |
| 31–35 | Swamp | Morning | Swamp croc / Rattlesnake | Thunderstorms |
| 36–40 | Gold mine cave | Dark | Twin outlaws / Raging bull | Lantern light only |
| 41–45 | Railroad | Noon | Train gang / Twins | Passing trains |
| 46–50 | Cavalry fort | Sunset | Cavalry captain / Volcano giant | Dust storms |
| 51–55 | 🏚 Ghost town (1.8) | Sunset | Ghost gunslinger / Train gang | 🌾 Rolling tumbleweeds |
| 56–60 | ⛏ Silver mine (1.8) | Dark | Mad miner / Twins | Falling stalactites (red circles) |

---

## 6. Outlaws and bosses

### Outlaws
Bandit, runner (fast), tank (tough), gang henchman, shield bearer, bomb rider, hiding sniper, phantom decoy, and small minions that look like each boss. Defeating one adds it to the 📖 bestiary.

### 14 bosses
| Boss | Phase 2 stage attack (below 50% health) |
|---|---|
| Outlaw Blackjack | 🛢 Rolling powder kegs |
| Raging bull Diablo | 💥 Ground cracks |
| Giant rattlesnake "Sidewinder" | 🏜 Quicksand |
| Mad miner "Boom-Boom" | 🪨 Falling rocks |
| Ghost gunslinger "Phantom Jack" | 👻 Chasing phantom whirls |
| Train gang boss "Iron Horse" | 🛢 Powder kegs (shielded while henchmen live) |
| Giant eagle "Stormwing" | 🌪 Tornadoes |
| Cactus golem "Thorn Giant" | 🪨 Rolling boulders |
| Twin outlaws "Left & Right" | ✖ Crossfire (both must fall within 6 s) |
| Volcano giant "Magma" | 🌋 Volcanic bombs |
| Swamp croc "Bogkeeper" | 🐊 Spreading mud |
| Traitor cavalry captain "Custer" | 🎖 Cavalry volleys |
| Giant outlaw "Double Barrel" | Multiplayer co-op only |
| 👤 Shadow Sheriff "Black Badge" (1.8) | Story chapter 20 final boss. Crossfire and phantoms take turns |

- Each boss's ★ tier rises every time it appears, and it grows stronger the more gear you carry.
- Defeated bosses drop a treasure chest, gold armor (sometimes 💎 diamond) and their own relic.

---

## 7. Weapons, mounts, armor and relics

### 13 weapons
Revolver, shotgun and repeater rifle are the starters. Gatling gun, dynamite, golden revolver, dual pistols, bow, lasso, firebomb, scatter cannon, lightning pistol and boomerang come from boss chests and relics.
- The wandering merchant sells ⭐ weapon upgrades.
- Traps include the 🪤 bear trap and 🛢 powder keg.

### 10 mounts
| Mount | Speed |
|---|---|
| 🐎 Horse "Lightning" | 13 |
| 🐴 White horse "Silver Arrow" | 18 |
| 🦬 Bison "Thunder" | 10 |
| 🛞 Stagecoach | 11 |
| 🐫 Camel "Sandstorm" | 12 |
| 🫏 Mule "Grit" | 9 |
| 🐦 Ostrich "Flash" | 17 |
| 🐆 Gold puma "Golden Claw" | 14 |
| 🏍 Steam bike | 20 |
| ⛏ Mine cart "Rattler" | 11 |

- Riding cuts the damage you take and lets you trample enemies. Every mount has a skill (Space) and a dash.
- 🐎 **Mount garage**: levels 1–10, training, body and trim colors, and traits. Garage mounts are used for racing only.

### Armor
Hat, armored vest and spur boots, in bronze, silver, gold and 💎 diamond. Armor has durability, and picking up the same slot repairs it.

### Relics (one per boss)
Blackjack's lucky card (crits), Diablo's horn charm (+50 health), viper rounds (poison), miner's dynamite belt, ghost cloak (25% dodge), gang's dual pistols, storm feather (faster rolls), thorn armor and twin silver coins (+50% headshot damage).

### Animal pals
🐕 Sheriff dogs (Shepherd "Breeze", Black dog "Shadow" and Samoyed "Snowflake"), which gain skills as they level up, plus 🦅 Eagle "Hawkeye" and 🦝 Raccoon "Sneaky".

---

## 8. Progress and rewards

| Item | Details |
|---|---|
| ⭐ Levels and titles | Level up with XP. 9 titles and max-health upgrades |
| 💰 Sheriff coins | 1/10 of your score after each game. Spend them in the shop, on style and in the garage |
| 🏅 75 achievements | Some are hidden |
| 📅 Journal | Check-in (7-day streak bonus), 🎯 3 daily to-dos, daily challenges and 👥 weekly friend challenges |
| 🎫 Season pass | Collect stars to unlock tier rewards |
| 📬 Mailbox | Rewards arrive right away; the mailbox keeps a record |
| 📚 Collection and 🏆 office | Collect weapons, cards and relics, and display trophies in your office |
| 🎉 Celebrations (1.8) | Wave 20 🎤 song, wave 40 🤠 line dance, wave 60 🎆 fireworks, wave 100 🪢 lasso trick. Afterwards your health is fully restored. To skip, wait 3 s, then press twice |
| 🏆 Victory poses (1.8) | A 2-second pose after a boss kill or a race win. 7 choices: hat tip, hooray, gun spin, salute, lasso, backflip or none |

---

## 9. Playing with friends

On the claude.ai game link, 2–4 players meet using the same room code.

| Mode | What it is |
|---|---|
| 🎲 Auto | Picks by player count: 2–3 players get co-op, 4 get a team battle |
| 🤝 Co-op | Same outlaws and boss in the host's town. Downed players revive next wave |
| 🏁 Versus | Start together on the same difficulty and race for the highest score |
| 🔔 Duel tournament | 5 rounds of reaction shooting |
| ⚔️ Co-op boss rush | This week's 9 bosses together. Team records by player count |
| 📨 Team battle: send enemies / 🏆 Team battle: score | 2v2, 2v1 or 1v1 |
| 🏇 Mount race | Race on the same course |
| 📖 Story together (1.8) | Play a chapter the host has cleared. If it's your next chapter, your own progress advances |

- Also: 💬 quick chat, 📍 ping, 😀 post-game emotes, 🏅 MVP, 👀 spectate, ⚡ quick start and 🏁 host room settings.
- 🎉 When a celebration starts, everyone dances together on every screen (1.8).
- Social: 📇 friends list, 🏆 weekly friend league, 🎁 gifts, 🔗 one-tap invites (QR and code) and 📮 friend compare card.
- New in 1.8: 🐉 weekly friend raid and 👻 friend ghost races.

---

## 10. Style

Style items: hats, hat decorations, vests, badges, name tag colors, skins, horse colors, saddles, gun colors, footstep effects, dog collars and 🏆 victory poses. You buy them with coins or earn them from achievements, levels and the season pass. There's also a 📷 photo mode and a 🖼 photo album.

---

## 11. Convenience and settings

- Settings tabs: 🔊 Sound · 🎮 Controls · 🖥 Display · 👤 Account & other.
- Display options: 1st/3rd person, auto graphics, battery saver, reduced shake and cinematics, large text, color-blind mode and captions.
- 💾 3 save slots. Save and quit works in Classic, Endless, Event and Daily rule; resume with ▶ Continue.
- 💾 Record backup: copy your records as text and move them to another device.
- 🐞 Report a bug (1.8): from Pause or Settings. Version, mode, device and recent errors are included, and you can also copy the report to send it yourself.
- 📝 Feedback and 🧯 automatic error logging (no personal data).
- 🌐 Korean / English.

---

## 12. Leaderboards

The Top 10 has tabs for each difficulty (Easy, Normal, Hard, Hell), plus 🎉 Event, ⚔️ Boss rush (solo and team), 🔔 Duel, 🏇 Race (per course), 🃏 Cards, 🗼 Tower and 🌙 Night raid.

---

## 13. Android app and release

- `app/`: a Capacitor app using the filesystem, share, local-notifications and app plugins.
- Current version: **1.8 (versionCode 9)**.
- `npm run build` copies the game into `www/`. Code and styles are minified for the app build only (about 739 KB → 573 KB).
- Firebase rules live in `app/firestore.rules`. They cover scores, event, rush, duel, race, cards, tower, night raid, friend raid, friend ghosts and error logs.
- Store assets are in `app/store/`: Korean and English screenshots, the feature graphic, listings, promo videos (landscape `promo.mp4`, vertical `promo-vertical.mp4`) and `RELEASE_GUIDE.md`.
- Privacy policy: `privacy.html`. About page: `about.html`.

---

## 14. Version history

| Version | Highlights |
|---|---|
| Early builds | 2D shooter → Three.js 3D sheriff. Then, in order: 2 bosses, names and Top 10, 5 stages, mounts, boss ★ tiers, armor, mobile touch controls, 4 more bosses, bag, Android app, 4 difficulties, bestiary, minimap, rolling, diamond armor, enemy faces, death animations, HD backgrounds, achievements, style, weather, rescues, save and quit, auto-advance, boss minions, shop, weapon upgrades, dog, traps, modes and missions, 1st person, photos, tutorial, settings, practice range, levels, new weapons, duel, new stages and bosses, co-op boss rush, check-in and events |
| 1.1 | Store launch prep (screenshots, listing, privacy policy) |
| 1.2 | 2–4 player multiplayer with shared enemies, quick chat, pings, roles, MVP and 6 new mounts |
| 1.3 | Mount garage, mount races, boss phase 2, daily rules, animal pals, 30 achievements, English and promo video |
| 1.4 | Card adventure, bounty map, 3 new stages, 3 new bosses, 3 new weapons, 3 new outlaws, surprise events, race items, Grand Prix, friend league, gifts and a co-op-only boss |
| 1.5 | Daily to-dos, level-gated features, red-dot hints, mini games, boss tower, card sets, race replays, backups, about page, invite rewards and feedback |
| 1.6 | Phone controls (joystick, one-hand mode, big buttons, battery saver), friends list, emotes, spectating, room settings, new style items, photo album, office trophies and collection |
| 1.7 | Three-branch start screen, journal, mailbox, shop tabs, fewer pop-ups, 10-chapter story mode, boss of the month, sheriff rank, player-count multiplayer, one-tap invites, friend compare card, settings tabs, app minification and vertical promo |
| 1.7.1 | Fixed: the celebration was skipped by the click or tap you were already shooting with |
| **1.8** | 🐞 Full check of every mode (fixed saving in story, boss of the month, bounty and practice, and the tower tip); phone button and narrow-screen checks; bug-report button; 4 celebrations; victory poses; dance together; cleaner screen during celebrations; Story Part 2 with a new final boss; new stages (Ghost town, Silver mine); 🌙 Night raid; 🐉 Friend raid; 📖 Story together; 👻 Friend ghost races |

The step-by-step history is in the "변경 이력" (change log) section of [README.md](README.md).

---

## 15. Files

| File | Description |
|---|---|
| `index.html` | The whole game (HTML, CSS and JavaScript in one file) |
| `GAME_GUIDE.md` / `GAME_GUIDE_en.md` | This guide (Korean / English) |
| `README.md` | The original guide and step-by-step change log |
| `about.html` · `privacy.html` | About page · privacy policy |
| `app/` | Android app project and store assets |
