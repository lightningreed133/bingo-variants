let variant_list_data = [
    {
        name: "Lockout",
        credit: "Initial draft made by Flesh, updated/maintained by Tim, jacks, marlin, truegen, amber, Spirity, aco, crab, and others.",
        description: "Two players compete to finish a board of 25 squares. First to tick 13 objectives wins. If one person ticks an objective, the other may not tick it. Prologue cutscenes are not skippable. Standard custom progression rules apply. Additional Notes: The main competitive gamemode and form of Celeste bingo. Highly conducive to strategy.",
        notes:"The main competitive gamemode and form of Celeste bingo. Highly conducive to strategy.",
        color:"Black",
        tags:["lockout"],
        min_teams:2,
        max_teams:2,
        min_players_per_team:1,
        max_players_per_team:1,
    },

    {
        name: "Old Longo (Blackout)",
        credit: "Generator created by April, with input from various others",
        description: "A blackout version of the original longo generator. Standard lockout rules apply.",
        color:"Blue",
        tags:["blackout"],
        min_teams:1,
        max_teams:null,
        min_players_per_team:1,
        max_players_per_team:null,
    },

    {
        name: "Minesweeper Bingo",
        credit: "Suggested by gnommis, metagloria, crab, oolimry, Cirion independently. Programmed/finalized by Cirion",
        description: "Teams have to tick all objectives that aren't bombs, while avoiding completing bomb objectives, players are required to tick all completed objectives. Except if the objective is known to be a bomb and required to complete an objective that is known to not be a bomb. Suggested size is 7x7 with 13 mines for 2+ players.",
        color:"Green",
        external_links:[{
            name:"Bookmark",
            link:"https://discord.com/channels/529677942393929749/689529939975864453/1122479916244545566",
        }],
        tags:["blackout"],
        min_teams:1,
        max_teams:null,
        min_players_per_team:1,
        max_players_per_team:null,
    },

    {
        name: "Fullgo",
        credit: "Epyc",
        description: "A variant of lockout bingo in which every square requires you to complete an extremely long objective from an entirely new save file. After completing and ticking an objective, that save file must be deleted. First to 13 wins.",
        color:"Red",
        external_links:[{
            name:"Generator",
            link:"https://discord.com/channels/529677942393929749/689529939975864453/1068274121290551386",
        }],
        tags:["lockout"],
        min_teams:2,
        max_teams:2,
        min_players_per_team:1,
        max_players_per_team:1,
    },
]