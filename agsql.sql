/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : agsql

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 19/10/2022 18:44:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'admin', '123456');

-- ----------------------------
-- Table structure for attention
-- ----------------------------
DROP TABLE IF EXISTS `attention`;
CREATE TABLE `attention`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `userId` int(0) NULL DEFAULT NULL,
  `merchantId` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of attention
-- ----------------------------
INSERT INTO `attention` VALUES (5, 1, 3);
INSERT INTO `attention` VALUES (7, 1, 1);
INSERT INTO `attention` VALUES (8, 2, 1);

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `userId` int(0) NOT NULL,
  `commodityId` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES (2, 1, 2);
INSERT INTO `collect` VALUES (7, 2, 1);
INSERT INTO `collect` VALUES (8, 2, 2);
INSERT INTO `collect` VALUES (10, 2, 5);
INSERT INTO `collect` VALUES (11, 1, 4);

-- ----------------------------
-- Table structure for commodity
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `merchantid` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `count` int(0) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of commodity
-- ----------------------------
INSERT INTO `commodity` VALUES (1, '1', '橙子', '来自青青草原的超级无敌巨无霸甜的大橙子', '29.9', 'http://localhost:5001/public/shopphoto/a81682481f5e0b3fe489640224921d1b', '1', 11);
INSERT INTO `commodity` VALUES (2, '1', '地瓜', '来自混凝土超级软糯沙沙的矮种地瓜', '12.9', 'http://localhost:5001/public/shopphoto/a01e4b3d67ae90920fa9e2332cbb9c84', '1', 13);
INSERT INTO `commodity` VALUES (3, '2', '山东大葱', '山东大葱山东大葱189的山东大葱', '8.8', 'http://localhost:5001/public/shopphoto/069796b2af4c90c628584eaf928a489e', '1', 44);
INSERT INTO `commodity` VALUES (4, '1', '莲雾', '来自贫困山区，辛苦耕种的多汁甜甜的大个莲雾', '32', 'http://localhost:5001/public/shopphoto/55c5ad08de946260107a24a2a973a9bd', '1', 27);
INSERT INTO `commodity` VALUES (5, '1', '苹果', '来自烟台阳光充足小镇的翠翠甜甜大苹果，一箱足足5斤！！！', '32', 'http://localhost:5001/public/shopphoto/812ca637d09bf19ed78a775072cf3f0a', '1', 2);
INSERT INTO `commodity` VALUES (6, '1', '枸杞子', '来自宁夏超级甜甜干巴不压秤的枸杞子，富含超级多的维生素，寒冬必备', '39', 'http://localhost:5001/public/shopphoto/40d96912367e9dad1f2acdf72a876124', '1', 22);
INSERT INTO `commodity` VALUES (7, '1', '牛奶', '来自呼伦贝尔，吃了很多鲜草才生产的新鲜牛奶！（保质期短，现买现喝）', '10', 'http://localhost:5001/public/shopphoto/9018cd3082b4dda9b799205cb8487847', '2', 0);
INSERT INTO `commodity` VALUES (8, '1', '海南酸豆角', '正宗海南酸豆角，当地特产纯天然酸料，酸口星人的最爱！一口整个爱上！', '99', 'http://localhost:5001/public/shopphoto/022886bc45180d45057ef4ff6f9f22c0', '1', 1);
INSERT INTO `commodity` VALUES (9, '3', '鱼腥草', '对此评价两极分化严重，爱吃着一口封神，不爱吃着敬而远之！一尝探究竟', '12.3', 'http://localhost:5001/public/shopphoto/1a87dbf507633e7b5d2c28aaab49d1bd', '1', 19);

-- ----------------------------
-- Table structure for information
-- ----------------------------
DROP TABLE IF EXISTS `information`;
CREATE TABLE `information`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `picture` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(10000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `datetime` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of information
-- ----------------------------
INSERT INTO `information` VALUES (3, ' 全国达标合格农产品亮证行动在浙江杭州启动', 'http://localhost:5001/public/information/4c79b189f3921761eb94377914ecd264', '　本网讯  9月26日，全国达标合格农产品亮证行动推进会在浙江省杭州市举行，会上启动了全国达标合格农产品亮证行动。会议以“学法力行 践诺增信”为主题，进一步宣贯新修订的《农产品质量安全法》，统筹推进农产品“三品一标”。\n\n　　会议指出，承诺达标合格证制度是新修订的《农产品质量安全法》的一项重要制度创新，对农产品生产者开具、收购者收取保存并再次开具、批发市场查验承诺达标合格证做出了具体规定。要将亮证与普法结合，将法律宣贯和实施亮证行动一体推进，引导农产品生产经营者科学用药、规范开具、积极亮证。要强化工作指导，督促农产品生产企业、农民专业合作社应开尽开，创造条件鼓励支持农户开具承诺达标合格证。要创新开证、用证、查证形式，将承诺达标合格证开具、验证等纳入农安信用评定，让达标合格农产品更加可信赖，真正将达标合格农产品打造为普遍认可的农产品品牌。\n\n　　会议现场举行了《农产品质量安全法》普法宣讲员宣誓和达标合格农产品亮证签约，并向普法宣讲员颁发证书。农产品生产主体、收储运主体、集团采购、产地电商代表共同发起了亮证倡议。与会代表还现场考察了浙江省杭州市临安区达标合格农产品亮证应用情况。', '2022-09-28 00:12:26');
INSERT INTO `information` VALUES (4, '《中国奶业战略发展重点课题研究报告2021》正式发布', 'http://localhost:5001/public/information/78cf185c128361e59c4de1bb859fa377', '据中国奶业协会副会长兼秘书长刘亚清介绍，2021年中国奶业协会战略发展工作委员会，充分发挥思想库、智囊团的作用，从行业重点难点问题着手，着力开展前瞻性、针对性、储备性的战略研究，通过深刻总结发展成就和经验，科学研判发展环境和形势，系统谋划发展战略和举措，以及对奶业全产业链进行深入研究，形成了《中国奶业战略发展重点课题研究报告2021》，报告收录了中国奶业协会战略发展工作委员会和中国奶业协会其他专业委员会以及中国奶业协会副会长单位、中国奶业20强与观察员企业、行业专家学者撰写的《中国奶业奋进2025》，农业农村部食物与营养发展研究所所长王加启团队牵头撰写的《中国奶业扩大内需、提升乳品消费战略研究报告》，国家奶牛产业技术体系首席科学家李胜利团队牵头撰写的《中国奶牛养殖业发展现状、问题及解决策略研究报告》，伊利集团牵头撰写的《中国奶业企业国际化经营与质量安全体系建设研究报告》，蒙牛集团牵头撰写的《完善中国奶业产业链供应链的保障机制研究报告》，光明乳业牵头撰写的《创新驱动提升乳制品增品种、提品质、创品牌的“三品”战略 研究报告》，现代牧业牵头撰写的《如何打造农牧循环的生态型奶牛养殖模式研究报告》，7篇课题研究成果为奶业振兴发展和更好应对复杂多变的国内外环境形势，提供了广阔思路和战略方案。 \n　刘亚清表示，“十四五”是中国奶业实现新的更大发展的关键时期，中国奶业协会战略发展工作委员会将紧扣《中国奶业奋进2025》，围绕制约奶业发展的瓶颈，重点在企业资产重组、金融资本运作、奶源保障和消费升级等方面深度策划，破题助力。一是引领乳品新型消费品质升级，推进“互联网+”移动支付乳品营销新业态、新模式，促进网上线下双向深度融合，推动乳品新型消费扩容提质，激发消费内生活力；拓展乳制品消费种类，引导“营养指导消费、消费引导生产”调控理念，统筹液态乳品、干乳制品和功能乳品，提升奶酪等高附加值产品的占比，实现牛奶的精细化和最大化利用，为奶业发展开拓新动能。二是拓展奶业企业投资融资服务，引导企业通过资产重组、兼并收购、强强联合等方式，形成以市场为导向的合理经营规模，培育规模企业加快集团化、集约化进程；引入资本运作模式，为企业的投融资提供项目定位、可行性分析和投融资策划等咨询服务，链接金融机构、风险投资、信用担保，顶层构建投融资机制，为企业创新创造搭建资金服务平台。三是超前策划奶源总量安全保障，着眼扩繁增量，保护优良遗传物质和良种牛源，运用产学研一体化模式，加速改良和扩繁进程，为奶业振兴做出奶源安全的战略储备。四是推动中国奶业人才培养战略，围绕奶源基地建设、乳制品加工流通、乳品质量安全以及消费引导等方面，突出“人”的要素，发挥“才”的助力，在实用人才培养上率先起步；树立全球视野，对接现代技术和人才需求的战略储备，构建全球先进管理和技术人才“引入内化”机制，在管理人才的培养上同步跟进；以产业数字化为切入点，构建战略人才孵化器，在高端人才培养上创造环境。 \n\n', '2022-09-28 00:15:41');
INSERT INTO `information` VALUES (5, '玉门枸杞', 'http://localhost:5001/public/information/fc38c5b500c6153e400f427fe62ccc64', '一.产品介绍\n　　玉门枸杞，甘肃省酒泉市玉门市特产，全国农产品地理标志。玉门地处枸杞种植黄金带，因光照时间长，昼夜温差大，降雨量小，使枸杞生长周期长，营养成分多，保证了枸杞正常采摘和晾晒，减少了树体及鲜果的病虫害，造就了玉门枸杞色泽鲜红、口味甘甜、粒大皮薄、肉厚汁多的优良品质。\n\n　　二.自然生态环境和人文历史因素\n\n　　2.1地貌土壤情况玉门市地处河西走廊西部，祁连山北麓。玉门地貌分为祁连山地、走廊平原和马鬃山地三部分。地势南、北高，中部低，平均海拔2300米。产区地势平坦，海拔适宜。土壤绝大部分是灌漠土，质地以沙壤和轻壤为主，PH值7～8.5之间，土壤肥沃（表层有机质含量为15.5g/kg）土层深厚，为玉门枸杞的生长提供良好的生存环境，使其枝条粗壮，根系发达，因而孕育了品质优质的玉门枸杞。2.2气候情况玉门枸杞产区属典型的大陆性中温带干旱气候，日照时间长（年日照时数为3200h左右）；辐射强（年总辐射量153.84千卡/㎝2）；温差大（年平均气温日较差16.1℃）；有效积温长（2400℃～3298℃）；无霜期长（119～151天）；年平均降水量为66.5mm，年蒸发量2653.2mm。该气候有利于枸杞枝叶的生长，枝条粗壮；有利于光合作用，果实营养物质积累多，因降雨量小，降低了枸杞受有害生物侵染的几率，所产枸杞果粒大，产量高，品质好。2.3水文情况玉门境内主要有白杨河、疏勒河和小昌马河等河流，水资源较为丰富，是枸杞的主要灌溉用水来源。这些河流均发源于祁连山，富含锶、钾、钠、钙、镁、锌等多种矿物质和微量元素，水质清澈优良。同时，种植区域无化工等污染性工矿企业，无“三废”排放和空气污染，也没有重金属污染历史，使得玉门枸杞绿色无污染，营养丰富。\n\n　　三.地域范围\n\n　　玉门枸杞农产品地理标志地域保护范围包括甘肃省玉门市行政所辖区域内的玉门镇、赤金镇、花海镇、柳河镇、黄闸湾镇、下西号镇，昌马乡、清泉乡、柳湖乡、小金湾东乡族乡、独山子东乡族乡、六墩乡、黄花农场、饮马农场12个乡镇和2个团场，共59个行政村2个农垦团场。地理坐标位于：东经96°15′至98°30′，北纬39°39′40\"至41°00′之间。年生产规模1.487万公顷，年总产量2.403万吨。\n\n　　四.产品品质特性特征\n\n　　4.1外在感官特征玉门枸杞鲜果果实饱满，呈纺锤形，色泽鲜红，单果重1.1〜1.8g，口味甘甜，粒大，皮薄，肉厚、汁多、果柄短，气味清香。干果形状呈类纺锤形，略扁稍皱缩，果皮鲜红色、紫红色或枣红色，单果重0.3〜0.5g，具有枸杞特有的香味。4.2内在品质指标玉门枸杞品质极佳，枸杞多糖含量≥3%；水分含量≤13%，总灰分含量≤5.0%，浸出物含量≥64%，甜菜碱含量≥4mg/g。4.3安全要求玉门枸杞产品应严格按照无公害和绿色食品标准要求执行。', '2022-09-28 00:18:40');
INSERT INTO `information` VALUES (6, '葱姜施肥要适量均衡', 'http://localhost:5001/public/information/e809981e4b35c037586ba8514e418a3c', '　　8月下旬正是大葱、大姜追肥的主要时节。那么大葱、大姜该如何追肥、追多少合适、追什么肥呢？\n\n　　追肥要适量 \n\n　　类似于大葱、大姜这样喜凉性的蔬菜一般会在8月下旬进行一次大追肥。主要原因是进入9月份后，天气转凉，大葱、大姜进入快速生长期，这是其增产高产的关键时期。8月下旬是关键生长期的前期，进行一次大追肥是科学实用的。\n\n　　施肥应因地制宜，适量追肥。很多菜农认为，大葱应该开沟追肥，其实这也是不正确的，大葱开沟追肥容易伤害大葱的根须，这样反倒不利于大葱的生长。\n\n　　有机肥完全腐熟 \n\n　　菜农都知道有机肥对大葱、大姜的生长有好处，在施用有机肥时也往往多施。施用有机肥除了要注意适量外，更应该注意一定要完全腐熟，如果没有完全腐熟，蔬菜很容易发生病虫害。大葱、大姜每亩地复合肥施用量在20公斤左右即可。这样既可以补充蔬菜的营养，还能减少土壤污染。\n\n　　多次少施 \n\n　　定植后葱苗生长缓慢，可适当追一次肥。8月下旬，葱株即将进入旺盛生长期，进行一次大追肥。9月下旬到10月上旬是大葱光合产物加快运转贮存，葱白产量显著积累增长的时期，再进行一次追肥。大追肥时期掌握多次少施的方法很关键，同时还要注意施肥的营养均衡。\n\n　　大葱、大姜的施肥，在增施有机肥料和深翻改土的基础上，还应着重考虑氮、磷、钾三元素的施用，同时注重硼、锌、钙等元素的施用。根据大葱、大姜对营养元素的需求特点，可以选用正规厂家的大量元素肥。\n\n  本次，上架正宗山东大葱，现场采摘！质量保证！！', '2022-09-28 00:42:49');

-- ----------------------------
-- Table structure for merchant
-- ----------------------------
DROP TABLE IF EXISTS `merchant`;
CREATE TABLE `merchant`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `shopname` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `idcard` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of merchant
-- ----------------------------
INSERT INTO `merchant` VALUES (1, 'test', '123456', '农产品旗舰店', NULL);
INSERT INTO `merchant` VALUES (2, '123@', '123', '这里都是水果店', '1231');
INSERT INTO `merchant` VALUES (3, 'test2', '123456', '乱七八糟农产品', '1122');

-- ----------------------------
-- Table structure for payed
-- ----------------------------
DROP TABLE IF EXISTS `payed`;
CREATE TABLE `payed`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `userId` int(0) NULL DEFAULT NULL,
  `commodityId` int(0) NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 75 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of payed
-- ----------------------------
INSERT INTO `payed` VALUES (30, 2, 1, '1231', '宁德市');
INSERT INTO `payed` VALUES (31, 2, 1, '', '宁德市');
INSERT INTO `payed` VALUES (32, 2, 1, '', '宁德市');
INSERT INTO `payed` VALUES (33, 2, 2, '', '宁德市');
INSERT INTO `payed` VALUES (34, 2, 2, '', '宁德市');
INSERT INTO `payed` VALUES (35, 2, 2, '', '宁德市');
INSERT INTO `payed` VALUES (36, 2, 2, '', '宁德市');
INSERT INTO `payed` VALUES (37, 2, 2, '', '宁德市');
INSERT INTO `payed` VALUES (38, 2, 2, '', '宁德市');
INSERT INTO `payed` VALUES (39, 2, 3, '', '福州市');
INSERT INTO `payed` VALUES (40, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (41, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (42, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (43, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (44, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (45, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (46, 2, 3, '', '福州市');
INSERT INTO `payed` VALUES (47, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (48, 2, 58, '', '福州市');
INSERT INTO `payed` VALUES (49, 2, 57, '', '福州市');
INSERT INTO `payed` VALUES (50, 2, 58, '', '福州市');
INSERT INTO `payed` VALUES (51, 2, 57, '', '福州市');
INSERT INTO `payed` VALUES (52, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (53, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (54, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (55, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (56, 2, 46, '', '福州市');
INSERT INTO `payed` VALUES (57, 1, 59, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (58, 1, 44, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (59, 1, 53, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (60, 1, 1, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (61, 1, 63, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (62, 1, 64, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (63, 1, 65, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (64, 1, 63, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (65, 1, 64, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (66, 1, 65, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (67, 1, 63, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (68, 1, 64, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (69, 1, 66, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (70, 1, 66, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (71, 1, 65, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (72, 1, 63, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (73, 1, 64, '', '福建省宁德师青青草原收货点');
INSERT INTO `payed` VALUES (74, 1, 65, '', '福建省宁德师青青草原收货点');

-- ----------------------------
-- Table structure for shoppingcart
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `commodityid` int(0) NOT NULL,
  `userid` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 67 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shoppingcart
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `nickname` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `introduction` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `discount` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'yating', '123456', 'ilili', '0', '19900000000', 'ilili@163.com', 'saxa1', 'http://localhost:5001/public/upload/014a0bf22bfb5bf4395b0931706b7742', '福建省宁德师青青草原收货点', '');
INSERT INTO `users` VALUES (2, 'root', '123456', 'ilili', '1', '123', '123@', '123@', 'http://localhost:5001/public/upload/c0af6f3a2de70f86fadf265274ece52d', '福州市', '');

SET FOREIGN_KEY_CHECKS = 1;
