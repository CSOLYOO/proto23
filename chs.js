/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "Kid": "孩子",
    "Quit daydreaming": "别做白日梦了",
    "∥LOCKED∥": "∥未解锁∥",
    "|Dojo, training area|": "|道场、训练区|",
    "Accessory": "配饰",
    "Autosave": "自动保存",
    "Body": "身体",
    "CLR": "清理",
    "Clear": "清理",
    "BG Color": "背景色",
    "BG presets": "背景预设",
    "delete the save": "删除存档",
    "Destroy gradients": "销毁渐变",
    "night": "夜间",
    "Location": "位置",
    "LOADING": "加载中",
    "Legs": "腿部",
    "Head": "头部",
    "Shield": "护盾",
    "WEP": "武器",
    "Weapon": "武器",
    "White": "白色",
    "special": "特殊",
    "settings": "设置",
    "save": "保存",
    "Resume the fight": "返回战斗",
    "R Arm": "右胳膊",
    "L Arm": "左胳膊",
    "R hand": "右手",
    "L hand": "左手",
    "Message log limit": "消息日志上限",
    "Nothing": "什么都没有",
    "Nothing here yet": "这里什么都没有",
    "OTHER": "其它",
    "Pause next battle": "暂停下一场战斗",
    "USE": "使用",
    "　stop combatlog　": "　停止战斗日志　",
    "　new": "　新",
    "\"<= Get up\"": "\"<= 起床\"",
    "\"Easiest\"": "\“最简单”",
    "\"Easy\"": "\"简单\"",
    "\"Normal\"": "\"正常\"",
    "\"Select the difficulty\"": "\"选择难度\"",
    "\"You are fighting training dummies\"": "\"你在和训练假人战斗\"",
    "(body": "(身体",
    "(R hand": "(右手",
    "|Your Home, Bed|": "|你的家，床|",
    "Monday": "周一",
    "load": "加载",
    "grey": "灰色",
    "hit chance": "命中率",
    "lvl:1 'Evil'": "等级:1 '邪恶'",
    "lvl:1 'Nobody'": "等级:1 '没人'",
    "m e s s a g e　　　l o g": "消息日志",
    "game not saved!": "游戏未保存！",
    "freeze messagelog　": "冻结消息日志",
    "FOD": "食物",
    "WPN": "武器",
    "(L hand": "(左手",
    "": "",
    "A Stick": "一根棍子",
    "Cure Grass": "治愈草",
    "EQP": "装备",
    "Game Saved": "游戏已保存",
    "Grab your stuff and get to it": "拿起你的东西，开始吧",
    "lvl:1 'Evil ♀'": "等级:1 '邪恶♀'",
    "New item obtained": "获得新物品",
    "saved...": "已保存...",
    "Wooden dummy": "木制假人",
    "Wooden dummy ->": "木制假人 ->",
    "Wooden dummy missed": "木假人未命中",
    "You": "你",
    "You ->": "你 ->",
    "You have training to complete": "您需要完成训练",
    "You missed": "你未命中",
    "\"A Stick\"": "\"一根棍子\"",
    "Class": "类型",
    "Club/Hammer, Blunt": "球杆/锤子，钝器",
    "Club/Hammer": "球杆/锤",
    "Medicine/Tool": "医药/工具",
    "Deletes": "删除",
    "health": "健康",
    "Herb with minor healing properties. Has to be processed before use. Can somewhat speed up recovery of tiny cuts and bruises if applied directly": "具有轻微治疗作用的草本植物。 使用前必须进行处理。 如果直接使用，可以在一定程度上加快微小伤口和瘀伤的恢复",
    "L arm": "左胳膊",
    "permanently": "永久",
    "R arm": "右胳膊",
    "Rarity": "稀有度",
    "Throw away": "丢弃",
    "Restores": "恢复",
    "Your favorite weapon!": "你最喜欢的武器！",
    "All": "全部",
    "Armor": "护甲",
    "Comestibles": "杂货",
    "Filter": "过滤",
    "Materials/Other": "材料/其他",
    "Weapons": "武器",
    "CRIT!": "暴击!",
    "(head": "(头部",
    "head": "头部",
    "lvl:1 'Evil ♂'": "等级:1 '邪恶♂'",
    "Material/Misc": "材料/杂项",
    "You have been knocked out...": "你被淘汰了...",
    "Looking at this fills you with bad memories": "看着这让你充满了不好的回忆",
    "Death Badge": "死亡徽章",
    "Awarded by fate for dying. Congratulations": "因死亡而被命运授予。 恭喜",
    "\"<= Go outside\"": "\"<= 出门\"",
    "\"Crash down and take a nap\"": "\“崩溃并小睡一会儿\”",
    "\"Examine basement door\"": "\"检查地下室门\"",
    "\"Examine Fireplace\"": "\"检查壁炉\"",
    "\"Examine your bag\"": "\"检查你的包\"",
    "\"Examine your hidden stash\"": "\"检查你隐藏的藏匿处\"",
    "|Your Home|": "|你的家|",
    "Foggy": "有雾",
    "Great way to pass time": "打发时间的好方法",
    "Sunny": "晴天",
    "Wednesday": "周三",
    "Your humble abode. You can rest here.": "你卑微的居所。 你可以在这里休息。",
    "\"<= Step away\"": "\"<= 走开\"",
    "\"Idea paper\"": "\"想法纸\"",
    "\"Retrieve spare firewood. You have a feeling you'll need it\"": "\"取回备用木柴。你有一种感觉，你会需要它\"",
    "\"Toss a stick into the fireplace\"": "\"把一根棍子扔进壁炉\"",
    "|Your Home, Fireplace|": "|你的家，壁炉|",
    "Bandana": "香蕉",
    "Better take this with you": "最好随身携带这个",
    "Bread": "面包",
    "Comfy fireplace. You can warm up here if you light it up": "舒适的壁炉。 如果你点亮它，你可以在这里暖和",
    "Egg": "鸡蛋",
    "It's locked": "它是锁着的",
    "Milk": "牛奶",
    "Rice": "大米",
    "Something you've forgotten to grab before. There's a pack of food and some junk idea paper.": "以前忘记拿的东西。 有一包食物和一些垃圾想法纸。",
    "Wooden Sword": "木剑",
    "Water": "水",
    "\"Property Deed\"": "\“财产契约\”",
    "\"Throw a stick into the fireplace\"": "\"把一根棍子扔进壁炉\"",
    "\"Throw some firewood into the fireplace\"": "\"往壁炉里扔些柴火\"",
    "Comfy fireplace. You'll need fire if you want to get some cooking done": "舒适的壁炉。 如果你想完成一些烹饪，你需要火",
    "Firewood": "柴火",
    "Grab the contents": "抓取内容",
    "Woven Wallet": "编织钱包",
    "You have some lying around nearby": "你附近有一些",
    "You reach for a small red box which you keep your valuables in, it is time to take it out": "你伸手去拿一个红色的小盒子，里面放着贵重物品，是时候把它拿出来了",
    "You notice the fire flickering slightly": "你注意到火光在微微闪烁",
    "\"Famine\"": "\“饥荒\”",
    "Allows you to list and examine your possessions": "允许您列出和检查您的财产",
    "Book": "书",
    "Clean rice grains. Healthy and delicious when cooked, but awful to eat in dry state": "米粒洗净。 煮熟后健康美味，但在干燥状态下食用很糟糕",
    "Cloudy": "多云",
    "Drizzle": "细雨",
    "energy": "能量",
    "Food": "食物",
    "Food(": "食物(",
    "Never": "从不",
    "NEW PERK UNLOCKED": "新特权解锁",
    "New Skill Unlocked!": "新技能解锁！",
    "Night": "夜晚",
    "Overcast": "阴",
    "perishable": "易腐烂的",
    "Power potion for your bones": "为您的骨骼提供强力药水",
    "Rain": "雨天",
    "Read": "阅读",
    "Regular drinkable water": "普通饮用水",
    "Simple loaf of bread, baked with care. It's crunchy and smells nice": "简单的面包，小心烘烤。 它很脆，闻起来很香",
    "Simple long sword carved from light wood. Easy to handle and is suitable as amateurish training weapon": "用轻木雕刻而成的简单长剑。 易于操作，适合作为业余训练武器",
    "skills": "技能",
    "Sword": "剑",
    "Sword, Blunt": "剑、钝器",
    "Thin cloth bandana. It protects your face from sweat": "薄布头巾。 它可以保护你的脸免受汗水的侵害",
    "This is your personal wallet, you received it as a gift": "这是你的个人钱包，你收到了它作为礼物",
    "This old looking legal document indentifies you as a sole owner of this broken down hut you live in. It was passed down to you by your ancestors, you speculate": "这份看起来很旧的法律文件表明您是您居住的这座破房子的唯一所有者。您推测，这是您的祖先传给您的",
    "Thursday": "周四",
    "Tiny scrap of paper with information. You wrote it yourself to remember things.": "带有信息的小纸片。 你自己写的来记住事情。",
    "Tried": "尝试",
    "Whole chicken egg, very nutritious": "全蛋，非常有营养",
    "You can feel coinage inside": "你可以感觉到里面的硬币",
    "You took a sip": "你啜了一口",
    "\"=> Check the Message Board\"": "\"=> 查看留言板\"",
    "\"=> Approach the cat\"": "\"=> 接近猫\"",
    "\"=> Enter Dojo\"": "\"=> 进入道场\"",
    "\"=> Enter Southern forest\"": "\"=> 进入南方森林\"",
    "\"=> Enter Western Woods\"": "\"=> 进入西部森林\"",
    "\"=> Food stand\"": "\"=> 食品摊\"",
    "\"=> Go home\"": "\"=> 回家\"",
    "The rain feels surprisingly refreshing": "下雨的感觉出奇的清爽",
    "Village Center": "村中心",
    "Your clothes get soaked": "你的衣服湿透了 ",
    "\"=> Shady Kid\"": "\"=> 阴暗的孩子\"",
    "You have a feeling it might rain soon": "你有一种感觉可能很快就会下雨",
    "\"<= Go back\"": "\"<= 回去\"",
    "Bun with red beans added to it, resulting in rich flavour": "包子里加了红豆，味道浓郁",
    "\"<= Return\"": "\"<= 返回\"",
    "\"Pet the cat\"": "\"宠物猫\"",
    "Red Bean Bun": "红豆包",
    "Stormy": "暴风雨",
    "Street Merchant Ran: Welcome! What would you like?": "街头小贩冉：欢迎光临！ 你要什么？",
    "There is a cat.": "有一只猫。",
    "Village Center, Cat": "村中心，猫",
    "\"Explore the posts\"": "\“探索帖子\”",
    "Village Center, Street Food Stand": "村中心，街头小吃摊",
    "This is an advertisement for woven straw baskets": "这是一个编织草篮的广告",
    "Message Board": "留言板",
    "Village Center, Message Board": "村中心、留言板",
    "You can find jobs or other stuff here": "你可以在这里找到工作或其他东西",
    "\"Instructor: You got beaten up by an inanimated dummy?! Pay attention to your condition!\"": "\"教官：你被一个无生命的假人殴打了？！注意你的情况！\"",
    "|Dojo, lobby|": "|道场，大厅|",
    "Item Acquired": "物品获得",
    "This is an advertisement for carpentery supplies": "这是木工用品的广告",
    "Gate Guard: \"It is too dangerous for you to leave at this moment. Come back when you train a bit\"": "门卫：“你这个时候离开太危险了，训练一下再回来。”",
    "Gate Guard: \"Nothing for you to do there. Scram!\"": "门卫：\“在那里你无事可做。快滚！\”",
    "Lunar Phase": "月相",
    "Last Quarter Moon": "上弦月",
    "A single penny, outdated form of currency. For some reason it's still in circulation": "一分钱，过时的货币形式。 由于某种原因它仍在流通",
    "Dime": "一毛钱",
    "It will take you about": "它会带你去",
    "minutes to finish": "几分钟就可以完成",
    "Nickel": "镍",
    "Penny": "一分钱",
    "Quarter": "25美分硬币",
    "Round copper dime. Still shiny": "圆形铜币。 依旧闪亮",
    "Small nickel, outdated form of currency. It was worth much more in the past": "小镍币，过时的货币形式。 过去更值钱",
    "Very large coin, made of copper. Not much worth as money, but collected and used by poor blacksmiths for resmelting into tools": "非常大的硬币，由铜制成。 不值钱，但被贫穷的铁匠收集并用于重新熔炼成工具",
    "You are reading": "你在阅读",
    "A tiny useless stone, found everywhere. Can be thrown to create distraction": "一块无用的小石头，随处可见。 可以扔来分散注意力",
    "Bring money next time": "下次带钱来",
    "Hey, I've got some good stuff for you": "嘿，我有一些好东西给你",
    "Pebble": "卵石",
    "Piece of old stale bread covered in mold. Takes courage to eat": "一块被霉菌覆盖的陈旧面包。 吃东西需要勇气",
    "Spoiled Bread": "变质的面包",
    "Sorry you can't afford that!": "对不起，你买不起！",
    "Village Center, Child Trader": "村中心，儿童商人",
    "Training dummy": "训练假人",
    "Training dummy ->": "训练假人 ->",
    "You dry up": "你太渴了",
    "You passed out...": "你昏过去了...",
    "legs": "腿部",
    "\"Sleeping\"": "\“睡眠\”",
    "The rest of Body": "身体的其余部分",
    "Unremarkable someone trying to find his purpose in life": "一个不起眼的人试图找到他的人生目标",
    "You can't read while sleeping": "你不能在睡觉时阅读",
    "Ability to go by without any sustenance": "能够在没有任何食物的情况下通过",
    "Alphabetically": "按字母顺序",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "???: ": "???: ",
    "/ dodge chance: ": "/ 闪避几率：",
    "Critical chance: ": "暴击几率: ",
    "INT: ": "智力: ",
    "hp: ": "生命值: ",
    "SPD: ": "速度: ",
    "rank: ": "段位: ",
    "STR: ": "力量: ",
    "Straw dummy": "稻草人偶",
    "exp: ": "经验: ",
    "AGL: ": "敏捷: ",
    "Area: Somewhere ": "地区：某处 ",
    "Area: Training Grounds ": "区域：训练场",
    "Last save: ": "上次保存 ",
    "Class: ": "类型: ",
    "Rarity: ": "稀有度: ",
    "DEF: ": "防御: ",
    "lvl: ": "等级: ",
    "There is a cat. Pets: ": "有一只猫。 宠物：",
    "　exp: ": "　经验: ",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "OFF": "关闭",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+) ([\d\.]+)\:([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)\/([\d\.,]+) ([\d\.,]+):([\d\.,]+)  $/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^lvl:(.+) \'Evil (.+)\'$/, '等级:$1 \'邪恶$2\''],
    [/^energy: (.+) eff: (.+)$/, '能量：$1 效率：$2'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);