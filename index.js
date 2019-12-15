import React, { Component } from 'react';
import { Image, Animated, View,PanResponder, FlatList } from 'react-native';
// import DetailSwiper from './detailSwiper.js'
// import RNSS from 'react-native-splash-screen'


export default class App extends Component {
  pan1 = PanResponder.create({
    onStartShouldSetPanResponder: async () => {
      await this.setState({ AnimeFlag: false }, () => {
        Animated.timing(
          this.state.flowerAnime
        ).stop()
      })
      return true
    },
    onPanResponderTermination: (evt, gestureState) => {
      this.setState({ AnimeFlag: true }, () => {
        this.onAnimation()
      })
    },
    onPanResponderMove: (evt, gestureState) => {
      var temp
      if (Math.abs(gestureState.dx) > 100) {
        temp = gestureState.dx > 0 ? 1 : -1
      } else {
        temp = gestureState.dx / 100
      }
      Animated.timing(this.state.flowerAnime, {
        toValue: temp,
        duration: 0,
        useNativeDriver: true
      }).start();
    },
    onPanResponderRelease: (evt, gestureState) => {
      this.setState({ AnimeFlag: true })
      this.onAnimation()
    }
  })
  constructor(props) {
    super(props);
    this.state = {
      root: 'http://129.28.168.85/img/Live2D/',
      AnimeFlag: true,
      flowerAnime: new Animated.Value(-1),
      // 缩小的倍数
      scale: 1,
      detailPlotNumber: 13,
      detailPlots: [
        { name: '“爱”与自动手记人偶', contents: '有一个没有感情的少女。少女为了战斗而活着。名字是薇尔莉特·伊芙加登。残酷的战争结束了，新的时代即将开始。在战场上受伤的薇尔莉特在床上醒来。洁白光滑的双臂，被银色闪耀的假手代替。她残缺的身体，战争的记忆和上司“基尔伯特·布甘比利亚”最后告诉自己的话。但是，这句话的意义薇尔莉特·伊芙加登无法理解。一个男人出现在那里。原陆军中校的克劳迪亚·霍金斯来接她，二人前往的是在南部的港口城市莱顿。充满活力的人们，美丽的港口的风景，莱顿的街道迎接薇尔莉特·伊芙加登。在新的城市薇尔莉特与“自动手记人偶”的相遇。那是把委托人的心情被代替语言写在信上的工作。有时委托人就连藏在心中的想法也可以猜到。基尔伯特的话“我爱你”，如果成为“自动手记人偶”的话，也许会明白那个意思。想知道“我爱你”。这是为了感情不是为了战斗的“工具”生活的薇尔莉特·伊芙加登，第一次表明了自己的意志。', index: '0' },
        { name: '回不来了', contents: '艾丽卡·布朗有个梦想。就像梦中读过的小说一样，用打动人心的语言写信。但是，现实是……邮政公司加入了新人的“自动手记人偶”、“玩偶”。人偶一样没有表情的少女薇尔莉特·伊芙加登。无论是谁都能完美替代她写信的“自动手记人偶”的工作，当然艾丽卡也没想到。对方的话，就收到了，感觉到的东西坦率地表现薇尔莉特·伊芙加登是，不知道委托人的“真正的心情”。因此委托人对代笔写的信愤怒，并去C . H邮政公司投诉。在旁边看着这一幕的艾丽卡，不知为什么她选择了这项工作，真是不可思议。明明没有感情的玩偶，明明没有被认为是必要的，这样的话，自己也一样。艾丽卡·布朗向薇尔莉特·伊芙加登询问。为什么这个工作好呢？薇尔莉特·伊芙加登，一直看着艾丽卡回答道。“即使没有任何进展，我也要将这个工作继续下去”薇尔莉特·伊芙加登的眼神，就像从云间照射进来的光一样，让艾丽卡想起了曾经的梦想。即使现在不知道委托人的“真正的心情”，如果能面对每一个人的心的话，薇尔莉特·伊芙加登一定也会在人的心里回响。信要坚持的写下去，自己也总有一天，也会像她一样，写出打动人心的书信。', index: '1' },
        { name: '希望你成为出色的自动手记人偶', contents: '优秀的“自动手记人偶”，能够从对方的话语中提炼出对方真正想要表达的意思并写入“信”中。这对于自动手机人偶来说比什么都重要。并且，也是最难做到的事。在自动手记人偶学校上学的露库莉娅·马尔博罗，在那里遇到了一个与众不同的像军人一样的少女。她用银色闪亮的假手打字，很快，也很准确。而且，学科的成绩也很优秀。但是，她给露库莉娅父母代笔的内容却没有能够称之为“信”。我不明白薇尔莉特·伊芙加登。面对最重要的人向她说出的“我爱你”，薇尔莉特·伊芙加登甚至连自己的心情都无法理解。“想要传达自己的内心、真的很难”。露库莉娅即使这样喃喃自语，也有想要传达心情的人。那是在战争结束后归来的哥哥。原先是军人的哥哥一直懊悔自己在战争中没有保护好自己的父母。这是露库莉娅唯一没有能够传达出来的，对剩下的唯一的家人的真正想法。“哥哥只要能活下去我就很开心了”。薇尔莉特将露库莉娅的想法写下，并将其传递给了她的哥哥。这既不是任务也不是课题。这是她代笔的，虽然很短但却充满感情的“信”。最重要的是，薇尔莉特迈出了成为自动手记人偶的重要的一步。', index: '2' },
        { name: '你将不再是道具而是成为人如其名的人', contents: '剪掉长发、穿上高跟鞋、穿上喜欢的衣服，目标是成为莱顿最受欢迎的自动手记人偶。新人自动手记人偶爱丽丝·卡娜莉憧憬着独立女性。爱丽丝第一次被一个陌生的人指名。爱丽丝和薇尔莉特前往远离城市的爱丽丝的故乡卡扎里。在那里等待着她们的是爱丽丝的父母。担心在城市中工作的独生女的父母，为了和女儿见面以假名提出了委托。父母为爱丽丝举办了生日派对，并且邀请了诸多名新郎的候补。其中，爱丽丝曾经爱慕的人也来到了派对。受到打击的爱丽丝在中途离开了派对。穿着不习惯的高跟鞋，离开故乡的理由，是忘记那段失败的恋爱……爱丽丝曾说出的那句“我爱你”，却并没有收到爱慕多年的他的回应。薇尔莉特知道“我爱你”这句话的分量。“我爱你”是句很有勇气的话。少佐在那时……平复心情后的爱丽丝，委托薇尔莉特代笔，写信为被自己糟蹋掉的派对所接待的客人提出道歉。这样的话。如果是这样的话，就连父母也要写信了。“如果是信的话能够将心情送到。”不能坦率地说出来的话，也能通过书信传递到。对于笨拙的女儿给父母的信，虽然无法当面说出，但是也能够传达出真正想要传达的心情。人的心情非常细腻复杂，有时会因为顾及对方而说出谎言。而正因为是写信，所以能够传递出真实的想法。    ', index: '3' },
        { name: '写替人结缘的书信吗？', contents: '季节变换、天空高远的时候，薇尔莉特代写过了许多书信，成为了为贵族间传递话语的自动手记人偶。这次，薇尔莉特写的是即将嫁到邻国的公主的情书。因为德罗赛尔王国的公主与弗吕格尔王国的王子所交换的恋文在国民间公开，举国庆祝两人的婚事。这是王国间的传统形式，在战争结束后为了缔结原先敌对的两国的关系而进行的“婚姻外交”。但是，王国的公主是14岁的少女夏洛特。嫁到异国以及离开陪伴多年的侍女艾伯特都令她感到不安。代替公主写恋文的，是和她同龄的自动手记人偶，薇尔莉特·伊芙加登。薇尔莉特是从古今的书籍中获得了恋爱的知识，写下了漂亮的情书。但是，夏洛特的表情却不明朗。几年前，在白茶花园中发生的事情。夏洛特一个人在花坛中哭泣，这时，弗吕格尔王国的王子达米安出现了。没有虚假的笑容，而是用真实的语言安慰着夏洛特。那时，夏洛特爱上了这位王子。尽管如此……从王子那里传来的自动手记人偶代笔的恋文，让她感到不安。在遍布美丽辞藻的情书中，我看不见王子的心。无论王子和公主的恋爱究竟是否幸福，国民都会感受到国家间的和平。夏洛特的眼泪无法控制住。与夏洛特同年的薇尔莉特知道了少女的爱慕之情。“我想让你不再流泪”。这样说着的薇尔莉特采取了行动。那是让公主用自己的手写下情书。实事求是的话语，以真是的笔触而拼接成的恋文，使得两人的心更加接近。然后，从达米安王子那里收到的最后一封信是这样一句话“今晚，在月下的庭院里等我”。那天晚上，两人在第一次相遇的白茶花园中许下了永久的爱的誓言。结婚典礼的早晨。公主对出生前就陪伴在她身边的侍女·艾伯特表达了感谢并向她道别。夏洛特的眼里并没有眼泪。同样的时候，薇尔莉特的眼里也映出了秋空的高爽。', index: '4' },
        { name: '“在某处的星空下”', contents: '每200年才会出现一次的阿里彗星，在人们相遇的瞬间突然造访了。仅有一次的相遇也能够改变人生。建在朱斯提提亚地区山间部的沙哈尔天文台，做着撰写工作的少年里昂·斯蒂法诺提斯，在这里度过了人生的大部分时间。他还不知道什么是恋爱。在天文台的大图书馆里，有着众多经历过岁月沉淀的书籍。为了记录每天不断劣化的古书，天文台召集了各地的自动手记人偶，作为记录古书的辅佐。手拿着打字机行游在各国的自动手记人偶。里昂讨厌母亲和做着自动手记人偶工作的女性。为了寻找在世界各地收集文献而失踪的父亲，母亲抛下了年幼的里昂独自前往寻找。里昂认为母亲选择了比自己更爱的男人，因此对于女人和恋爱都抱有着自卑感。但是，里昂遇见了至今为止从未见过的美少女薇尔莉特。那一瞬间，里昂的心中开始回响着至今为止从未有过的声音。里昂年幼时和父母分开，被寄放在沙哈尔天文台。听说薇尔莉特也是孤儿，连父母的样子都未曾见过。里昂希望更加了解和自己情况相似的薇尔莉特。200年才造访一次的阿里彗星出现的夜晚。里昂邀请了薇尔莉特观测彗星并与薇尔莉特交谈。自从被母亲放置在天文台后，里昂一直待在天文台。作为剩下的人，里昂感到很寂寞。尽管如此，里昂还是很珍惜母亲的感情。那是与没有意识到自己感情的薇尔莉特所持有的感觉非常相近的。“我和那个人分开后觉得很‘寂寞’”。了解到薇尔莉特的情况后，里昂认为基尔伯特对于薇尔莉特来说是一个非常特殊的存在。我知道是这样的。彗星之夜结束后，薇尔莉特离开了天文台。里昂决定离开工作多年的天文台，追随仰慕的父亲的脚步去世界各地做文献收集的工作。用自己的双脚走遍大陆，学习自己所不知道的东西。在这个世界上，和薇尔莉特在同一片天空下生活。', index: '5' },
        { name: '', contents: '“总有一天、我会给你看的、爸爸”。曾这样说过的女儿，已经不在这里了。湖畔边孤零零竖立着的宅邸里，倍受欢迎的戏曲家奥斯卡·韦伯斯特在那里生活着。奥斯卡邀请了帮他执笔记录戏剧的自动手记人偶。出现在他面前的，是和令他听到名字就很悲伤的“那个孩子”同样发色的少女薇尔莉特·伊芙加登。即使薇尔莉特来了，奥斯卡也继续喝着酒迷惑自己的精神。我不想去工作。那是有理由的。奥斯卡有着比自己生命更重要的女儿。撑着喜欢的遮阳伞在河畔边行走的“那个孩子”的名字是奥利维亚。“我也想渡过这片湖水。如果是那些落叶上的话、是不是可以走路呢？”奥莉维亚笑着对奥斯卡说到。但是，年幼的她患病去了天堂，只留下一个人、留下了奥斯卡。与重要的人离别是多么痛苦的事情啊。薇尔莉特对奥斯卡的深悲产生了共鸣。奥斯卡打算完成在奥利维亚生前讲给她听的故事，希望将这个故事叙写为面向孩子们的戏剧。故事的结尾，主人公手持着太阳伞穿过湖泊，回到苦苦等待的父亲的家里。那个情景不可能浮现，奥斯卡显得有些走投无路。在下一个瞬间，奥斯卡眼里出现的，是手持着太阳伞走向湖边一跃而起的薇尔莉特。靴子接触了水面的落叶，借助风的力量一瞬间浮出水上。已故的奥莉维亚的影像在奥斯卡眼里浮现。“真希望、你不要死去…”奥斯卡的眼里看到了奥莉维亚向他微笑。“你将我死去的女儿的‘总有一天’给实现了，谢谢你，薇尔莉特·伊芙加登。”这样说道的奥斯卡眼里充满了温柔。但是，薇尔莉特的眼眸深处却充满了悲伤。', index: '6' },
        { name: '薇尔莉特・伊芙加登', contents: '“总有一天一定会”认识到自己的处境的薇尔莉特，不知不觉地发现自己正在燃烧。4年前。在东北战区被称为“武器”的孤儿少女，遇到了基尔伯特。无法说话的少女，用空虚的眼神凝视着基尔伯特。基尔伯特牵引着少女，以上司的命令将她安排进自己的部队。基尔伯特将少年命名为“薇尔莉特”，希望她能够成为适合这个名字的女性。在基尔伯特的教导之下，薇尔莉特学会了说话和写字。另一方面，薇尔莉特以她被诅咒的才能以及非凡的战斗能力，将敌兵一个接一个地打倒。敌兵的鲜血浸染着薇尔莉特，为基尔伯特立下了屡屡战绩，薇尔莉特作为“少佐的武器”的称号也瞬间流传开来。然而，基尔伯特的内心却因此而束缚着……然后，岁月流逝，由于薇尔莉特的活跃，部队一次又一次地成功作战。部队来到了刚从敌国解放的马齐格。在那里，人们正在举办互相传达感谢之情的节日。在夜间店铺所出售的绿宝石胸针面前，薇尔莉特盯着胸针。“像是少佐的眼睛”，薇尔莉特感受到了冲击但却不知道用什么言语去表达。知道了那个叫做“美丽”的薇尔莉特，“我不懂它的意思，所以从没有那么说过。但是少佐的眼睛从我遇见少佐的时候就觉得很‘美丽’”。听到了这句话的基尔伯特，胸前感到了无法形容的痛苦。南北大战的决战地，圣地因坦斯。如果能够控制住这块地的话，战争就将结束了。基尔伯特带领部队成功侵入内部，从屋顶发出了全军突击的信号。然而谁也没有注意到，敌人的枪口指向了基尔伯特。.', index: '7' },
        { name: '薇尔莉特・伊芙加登', contents: '在夺回因坦斯的战争中，基尔伯特受到了敌人的枪击而产生了致命伤。带着无法动弹的基尔伯特，试图逃跑的薇尔莉特在受到了敌人的攻击后，失去了双臂。即使基尔伯特数次让薇尔莉特自己逃走，薇尔莉特也不愿意离开。基尔伯特微笑着对薇尔莉特说“你要活下去，变得自由。我从心底……爱着你”。但是，薇尔莉特无法理解这句话的意思，只能用悲痛回应“我……不知道少佐。‘爱’是什么？”败北的敌军打算炸掉自己的总部。留在崩溃的大圣堂中的两人，消失在了瓦砾中。薇尔莉特相信基尔伯特是平安的。但是，事实却是不同的。瓦砾中没有找到基尔伯特，基尔伯特被作为未归兵设立了坟墓。霍金斯带着站在瓦砾中的薇尔莉特回到了C.H邮局。决心告诉薇尔莉特真相的霍金斯认为，薇尔莉特只能靠自己的力量战胜过去。如果我继续做着自动人偶手记的工作，还能活下去吗？之后，薇尔莉特一直待在房间里。邮差将信送到了薇尔莉特那里。发件人是爱丽丝和艾丽卡。这是薇尔莉特第一次收到信。薇尔莉特帮助了邮差工作，将信送到市内的人家里。在投递信件的同时，薇尔莉特觉得每一封信都饱含了人们重要的想法。薇尔莉特夺走了很多人的生命，这一事实绝对不会改变。但是，这双写了许多信的手，拯救了很多人的生命，这一事实也不会消失。薇尔莉特是基尔伯特起的名字。为了成为适合这个名字的人，薇尔莉特再次踏上了旅程。', index: '8' },
        { name: '心爱的人 永远守护着你(o(╥﹏╥)o)', contents: '一个大人偶提着遮阳伞走在一条通往马格诺利亚家的白桦树路上。冬季伊始，自动手记人偶薇尔莉特来到了屋子里。马格诺利亚家的独生女・安妮是个好奇心旺盛且十分喜爱自己母亲的女孩。但是，她最近的心情并不好。在母亲身体情况不佳的情况下，来访的客人却络绎不绝。和母亲一起过家家、读书以及抓虫的机会都没有。母亲为了写信而邀请的“人偶”，一定是将母亲从我身边夺走的存在。随后，妈妈和薇尔莉特两人一起开始写秘密的信件。无法接近母亲的安妮感到越来越不安。对于安妮而言，比起母亲写不知道给谁的信，更希望母亲能够和自己在一起。如果这也不能实现的话，“至少希望在写信时能够握住妈妈的手，因为我知道妈妈剩下的能够陪伴我的时间已经不多了。”连那个也不允许，安妮感觉自己的胸部快要裂开了。说着任性的话，虽然不想让母亲悲伤，但是泪水却止不住流下来。安妮哭着说“写信能有什么必要”，薇尔莉特温柔地告诉她“不存在没有必要的信件”。这样说着的薇尔莉特轻轻抱住了安妮。薇尔莉特离开屋子的那天，安妮轻轻地吻了薇尔莉特温暖的脸颊。那个时候，安妮才知道薇尔莉特并不是“人偶”。薇尔莉特向可爱的安妮温柔地微笑着。薇尔莉特所代笔的是对安妮保密的信。这是在今后长达50年的安妮的生日中由母亲所寄来的信。将来，在母亲去世后，安妮通过这些书信接受者母亲的爱。在遥远的地方，被母亲守护着。', index: '9' },
        { name: '再也不想让任何人死去', contents: 'C.H邮政公司从战场上的士兵那里收到了代笔的委托。霍金斯是打算拒绝委托的，但是薇尔莉特偶然听到了那个委托。在战场上也有想向某人传达感情的人。薇尔莉特沉默地奔赴了战场。库图里高国，梅纳斯基地。那是内战刚刚爆发的危险地区。甚至连到达都很困难。薇尔莉特得到了当地邮政公司的帮助，乘坐飞机前往基地。委托人艾丹·菲尔德，收到部队的出击命令后在雪上中行走着。虽然战争已经结束了，但是还是不能回到父母和恋人玛利亚等待着的故乡。突然，枪声响起了。从背后瞄准士兵们的，是加达里克帝国的残党。如同是在享受狩猎的乐趣一般，一个接一个地射击着士兵。“讨厌……我不想死！我……要回去了！”虽然他想要逃亡，但是从他那里流下的鲜血却染红了雪。凄惨的战场上，从上空降落下来一位少女。那时C.H邮政公司的自动手记人偶薇尔莉特·伊芙加登。薇尔莉特将残党驱逐之后，背着艾丹躲到了小屋里，并处理了他的伤口。但是，知道自己死期将至的艾丹请求薇尔莉特为他写一封信。那是一封对养育自己的父母表示感谢的信。然后，他对遗留在故乡的青梅竹马的恋人玛利亚说“我爱你”。薇尔莉特用手指的动作记忆记录下了艾丹的话。薇尔莉特看了看艾丹“没关系的，大人，信一定会给您送达的”。天亮了，薇尔莉特来到了艾丹的故乡，玛利亚和艾丹的父母都哭着向送来信件的薇尔莉特致谢。“谢谢你送他回来。”真的想要救你，但是却没有能够帮到你。无法忍受的想法束缚着薇尔莉特的胸口。“已经、再也不想让任何人死去了。”', index: '10' },
        { name: '自动手记人偶与“爱', contents: '　连接南北大陆的纵贯铁路。这是作为和平的象征而完成的铁路，加达里克与莱顿沙夫特里希两国交换了和平书简。C·H邮政公司的嘉德丽雅将为条约代笔并且与其护卫贝内迪克特同行。和平反对派商讨了破坏铁路的事宜，为了组织这一事件而召集了迪特福利特的部队。另一方面，薇尔莉特在去艾丹故乡的路上，从飞机上目睹了可疑的烟雾。那是和平反对派进行的破坏活动的痕迹。感到不好的迹象后，薇尔莉特在飞机降落的地方遇到了贝内迪克特等人，此时，敌兵已经潜入了列车之中。迪特福利特·布甘比利亚非常讨厌薇尔莉特。“你是工具，如果我命令你把敌人全部杀掉的话，你就会杀掉吗？”但是薇尔莉特表示不再杀人，拒绝成为迪特福利特的武器。面对自己所不知道的薇尔莉特的一面，迪特福利特不愿意承认她的变化。薇尔莉特用手迎战敌人。率领反对派的梅尔库洛夫准将意识到了薇尔莉特是“莱顿沙夫特里希的战斗人偶”，将仇恨暴露了出来。敌兵一个接一个袭击薇尔莉特。绿宝石的胸针被夺走，薇尔莉特也被敌人抓住了。凝视着梅尔库洛夫准将手中的胸针，薇尔莉特想起了基尔伯特的眼睛。梅尔库洛夫准将向薇尔莉特挥刀的瞬间，一个拿着枪的男子击落了刀。那是迪特福利特。迪特福利特很讨厌无法保护基尔伯特的薇尔莉特。“是你杀了基尔，所以你也去死吧！！”薇尔莉特被迪特福利特的话刺痛了。但是，尽管如此，她还是说到“即便如此，少佐也叫我活下去”。那时，光亮的子弹射出，薇尔莉特飞出到迪特福利特前面。', index: '11' },
        { name: ' 自动手记人偶与“爱', contents: '薇尔莉特在枪弹中保护了迪特福利特。梅尔库洛夫准将带着无畏的笑容从列车上跳下。发现其真意的迪特福利特尝试紧急停止机车。薇尔莉特决心拆除敌人设置的炸弹，阻止和平反对派的意图。随后，加达里克与莱顿沙夫特里希两国的和平签字仪式举办，战争结束了。薇尔莉特等人回到了莱顿，回到了平时的工作。薇尔莉特在枪弹中保护了迪特福利特。梅尔库洛夫准将带着无畏的笑容从列车上跳下。发现其真意的迪特福利特尝试紧急停止机车。薇尔莉特决心拆除敌人设置的炸弹，阻止和平反对派的意图。随后，加达里克与莱顿沙夫特里希两国的和平签字仪式举办，战争结束了。薇尔莉特等人回到了莱顿，回到了平时的工作。用飞机在上空送信的航空节即将到来，C.H邮政公司里代笔委托人络绎不绝。人偶们也在紧张做着工作。嘉德丽雅和霍金斯建议薇尔莉特为自己写一封信。“按你现在的想法去写就好了。照心里想的去写。”第一次写给自己的信。在那里，迪特福利特找到了薇尔莉特，并将她带去了莱顿的宅子。薇尔莉特在那里第一次和基尔伯特的母亲见面。从心底爱着儿子的母亲同薇尔莉特谈话。“那孩子，还活着。在心里。所以我永远也不会忘记。哪怕每次想起他都会难过，也要记着他活下去。因为现在我也依然爱着他”。“好的”。听闻夫人的话语后，薇尔莉特用力地点头。航空节当天，许多寄托着人们想法的信，从空中迎风飞向大陆。薇尔莉特也写了信，信随风飞扬。“亲爱的基尔伯特少佐”，薇尔莉特相信那封信能送到——。  委托C.H邮政公司的话，在大陆的任何地方，她都会来。撑着水色的遮阳伞，戴着绿宝石的胸针，有着义手的自动手记人偶。“只要客人有意向，无论身在何处，都能上门服务。我是自动手记人偶服务，薇尔莉特·伊芙加登”。', index: '12' }
      ]
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  componentDidMount() {
    RNSS.hide()
    this.onAnimation()

  }

  onAnimation = () => {
    Animated.timing(
      this.state.flowerAnime,
      {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
      })
      .start(() => {
        if (this.state.AnimeFlag) {
          Animated.timing(
            this.state.flowerAnime,
            {
              toValue: -1,
              duration: 3000,
              useNativeDriver: true
            }).start(() => {
              if (this.state.AnimeFlag) {
                this.onAnimation()
              }
            })
        }
      })
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={
          <View>
            <DetailSwiper detailPlotNumber={this.state.detailPlotNumber} detailPlots={this.state.detailPlots} />
            <View {...this.pan1.panHandlers} style={{ position: 'relative', width: 435 / this.state.scale, height: 435 / this.state.scale }}>
              {/* 蓝碟1 155 349*/}

              <Animated.Image style={{
                width: 135 / this.state.scale, height: 107 / this.state.scale,
                position: 'absolute', zIndex: 3, left: 155 / this.state.scale, top: 349 / this.state.scale, transform: [{
                  rotateZ: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['0deg', '-10deg']
                  })
                }]
              }} source={{ uri: this.state.root + '蓝蝶1.png' }}>
              </Animated.Image>
              {/* 原图 */}
              <Image style={{ width: 435 / this.state.scale, height: 435 / this.state.scale }} source={{ uri: this.state.root + '原图.png' }}></Image>
              {/* 蓝花 86 8*/}
              <Animated.Image style={{
                width: 68 / this.state.scale, height: 71 / this.state.scale,
                position: 'absolute', zIndex: 2, left: 86 / this.state.scale, top: 8 / this.state.scale, transform: [{
                  rotateZ: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ["0deg", "360deg"]
                  })
                }]
              }} source={{ uri: this.state.root + '红花.png' }} >
              </Animated.Image>
              {/* 红花 321  103*/}
              <Animated.Image style={{
                width: 67 / this.state.scale, height: 67 / this.state.scale,
                position: 'absolute', zIndex: 3, left: 321 / this.state.scale, top: 103 / this.state.scale, transform: [{
                  rotateZ: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ["0deg", "360deg"]
                  })
                }]
              }} source={{ uri: this.state.root + '蓝花.png' }} >

              </Animated.Image>
              {/* 红眼睛 167 120*/}
              <Animated.Image style={{
                width: 25 / this.state.scale, height: 24 / this.state.scale,
                position: 'absolute', zIndex: 3, left: 167 / this.state.scale, top: 120 / this.state.scale, opacity: this.state.flowerAnime.interpolate({
                  inputRange: [-1, 1],
                  outputRange: [1, 0]
                })
              }} source={{ uri: this.state.root + '红眼睛.png' }} >
              </Animated.Image>
              {/* 蓝眼睛 167 120*/}
              <Animated.Image style={{
                width: 25 / this.state.scale, height: 24 / this.state.scale,
                position: 'absolute', zIndex: 3, left: 167 / this.state.scale, top: 120 / this.state.scale, opacity: this.state.flowerAnime.interpolate({
                  inputRange: [-1, 1],
                  outputRange: [0, 1]
                })
              }} source={{ uri: this.state.root + '红眼睛2.png' }}>
              </Animated.Image>
              {/* 红紫带1 164 273*/}
              <Animated.Image style={{
                width: 8 / this.state.scale, height: 41 / this.state.scale,
                position: 'absolute', zIndex: 3, left: 164 / this.state.scale, top: 273 / this.state.scale, transform: [
                  {
                    rotateZ: this.state.flowerAnime.interpolate({
                      inputRange: [-1, 1],
                      outputRange: ['0deg', '-30deg']
                    })
                  }, {
                    translateX: this.state.flowerAnime.interpolate({
                      inputRange: [-1, 1],
                      outputRange: [0, 8 / this.state.scale]
                    })
                  }
                ]
              }} source={{ uri: this.state.root + '红紫带.png' }}>
              </Animated.Image>
              {/* 红紫带2 155 275*/}
              <Animated.Image style={{
                width: 10 / this.state.scale, height: 27 / this.state.scale,
                position: 'absolute', zIndex: 3, left: 155 / this.state.scale, top: 275 / this.state.scale, transform: [
                  {
                    rotateZ: this.state.flowerAnime.interpolate({
                      inputRange: [-1, 1],
                      outputRange: ['0deg', '-30deg']
                    })
                  }, {
                    translateX: this.state.flowerAnime.interpolate({
                      inputRange: [-1, 1],
                      outputRange: [0, 6 / this.state.scale]
                    })
                  }
                ]
              }} source={{ uri: this.state.root + '红紫带2.png' }}>
              </Animated.Image>
              {/* 蓝碟2 177 306*/}
              <Animated.Image style={{
                width: 122 / this.state.scale, height: 121 / this.state.scale,
                position: 'absolute', zIndex: 3, left: 177 / this.state.scale, top: 306 / this.state.scale, transform: [{
                  rotateZ: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['0deg', '-15deg']
                  })
                }, {
                  translateY: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 13 / this.state.scale]
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, -12 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '蓝蝶2.png' }} >
              </Animated.Image>
              {/* 蓝蝶3 294 325*/}
              <Animated.Image style={{
                width: 84 / this.state.scale, height: 92 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 294 / this.state.scale, top: 325 / this.state.scale, transform: [{
                  rotateY: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['0deg', '-30deg']
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, -3 / this.state.scale]
                  })
                }, {
                  translateY: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, -3 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '蓝蝶3.png' }} >
              </Animated.Image>
              {/* 红大带 55 370*/}
              <Animated.Image style={{
                width: 129 / this.state.scale, height: 62 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 55 / this.state.scale, top: 370 / this.state.scale, transform: [{
                  rotateZ: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['0deg', '-15deg']
                  })
                }, {
                  translateY: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, -17 / this.state.scale]
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 6 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '红大带.png' }}>
              </Animated.Image>
              {/* 蓝袖子 243 248*/}
              <Animated.Image style={{
                width: 81 / this.state.scale, height: 95 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 243 / this.state.scale, top: 248 / this.state.scale, transform: [{
                  rotateZ: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['0deg', '-30deg']
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, -20 / this.state.scale]
                  })
                }, {
                  translateY: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 5 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '蓝袖子.png' }}>
              </Animated.Image>
              {/* 红袖子 144 170*/}
              <Animated.Image style={{
                width: 102 / this.state.scale, height: 83 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 144 / this.state.scale, top: 170 / this.state.scale, transform: [{
                  rotateZ: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['0deg', '20deg']
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 15 / this.state.scale]
                  })
                }, {
                  translateY: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 5 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '红袖子.png' }} >
              </Animated.Image>
              {/* 红角 232 66*/}
              <Animated.Image style={{
                width: 30 / this.state.scale, height: 31 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 232 / this.state.scale, top: 66 / this.state.scale, transform: [{
                  scale: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [1, 1.3]
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 3 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '红角.png' }}>
              </Animated.Image>
              {/* 红头发 122 104*/}
              <Animated.Image style={{
                width: 46 / this.state.scale, height: 70 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 122 / this.state.scale, top: 104 / this.state.scale, transform: [{
                  rotateZ: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['0deg', '-10deg']
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 3 / this.state.scale]
                  })
                }, {
                  translateY: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 3 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '红头发.png' }}>
              </Animated.Image>
              <Animated.Image style={{
                width: 28 / this.state.scale, height: 19 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 122 / this.state.scale, top: 104 / this.state.scale, transform: [{
                  rotateZ: '0deg'
                }]
              }} source={{ uri: this.state.root + '红头发辅助.png' }} >
              </Animated.Image>
              {/* 红蝶 */}
              {/* 38 248 */}
              <Animated.Image style={{
                width: 79 / this.state.scale, height: 83 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 38 / this.state.scale, top: 248 / this.state.scale, transform: [{
                  scale: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [1, 1.1]
                  })
                }, {
                  translateY: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, -2 / this.state.scale]
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 2 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '红蝶2.png' }}>
              </Animated.Image>
              {/* 101 192 */}
              <Animated.Image style={{
                width: 30 / this.state.scale, height: 38 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 101 / this.state.scale, top: 192 / this.state.scale, transform: [{
                  scale: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [1, 1.2]
                  })
                }]
              }} source={{ uri: this.state.root + '红蝶3.png' }} >
              </Animated.Image>
              {/* 80 223 */}
              <Animated.Image style={{
                width: 69 / this.state.scale, height: 101 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 80 / this.state.scale, top: 223 / this.state.scale, transform: [{
                  rotateY: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['0deg', '-30deg']
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 5 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '红蝶4.png' }}>
              </Animated.Image>
              {/* 蓝角 233 153*/}
              <Animated.Image style={{
                width: 26 / this.state.scale, height: 20 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 233 / this.state.scale, top: 153 / this.state.scale, transform: [{
                  scale: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [1, 1.3]
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, -3 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '蓝角.png' }} >
              </Animated.Image>
              {/* 蓝头发 */}
              {/* 254 134 */}
              <Animated.Image style={{
                width: 48 / this.state.scale, height: 61 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 254 / this.state.scale, top: 134 / this.state.scale, transform: [{
                  rotateZ: this.state.flowerAnime.interpolate({

                    inputRange: [-1, 1],
                    outputRange: ['0deg', '-10deg']
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({

                    inputRange: [-1, 1],
                    outputRange: [0, 5 / this.state.scale]
                  })
                }, {
                  translateY: this.state.flowerAnime.interpolate({

                    inputRange: [-1, 1],
                    outputRange: [0, -3 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '蓝头发1.png' }} >
              </Animated.Image>
              <Animated.Image style={{
                width: 30 / this.state.scale, height: 8 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 254 / this.state.scale, top: 134 / this.state.scale, transform: [{
                  rotateZ: '0deg'
                }]
              }} source={{ uri: this.state.root + '蓝头发1辅助.png' }}>
              </Animated.Image>

              {/* 324 182 */}
              <Animated.Image style={{
                width: 39 / this.state.scale, height: 82 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 320 / this.state.scale, top: 182 / this.state.scale, transform: [{
                  rotateZ: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: ['0deg', '-20deg']
                  })
                }, {
                  translateX: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 6 / this.state.scale]
                  })
                }, {
                  translateY: this.state.flowerAnime.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [0, 3 / this.state.scale]
                  })
                }]
              }} source={{ uri: this.state.root + '蓝头发2.png' }} >
              </Animated.Image>
              <Animated.Image style={{
                width: 35 / this.state.scale, height: 21 / this.state.scale,
                position: 'absolute', zIndex: 4, left: 325 / this.state.scale, top: 182 / this.state.scale, transform: [{
                  rotateZ: '0deg'
                }]
              }} source={{ uri: this.state.root + '蓝头发2辅助.png' }} >
              </Animated.Image>
            </View>
          
          </View>

        }
      />
    );
  }
}