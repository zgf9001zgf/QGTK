import { Question } from "../types";

const FIXED_TIMESTAMP = 1715000000000;

export const PRELOADED_QUESTIONS: Question[] = [
  // --- Batch 1 (1-50) ---
  {
    id: "static_1",
    text: "标注形位公差代号时，形位公差框格左起第二格应填写 ( )。",
    options: ["形位公差项目符号", "形位公差数值", "形位公差数值及有关符号", "基准代号"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_2",
    text: "Ry 是表面粗糙度评定参数中 ( ) 的符号。",
    options: ["轮廓算术平均偏差", "微观不平度十点高度", "轮廓最大高度", "轮廓不平程度"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_3",
    text: "零件图中注写极限偏差时，上下偏差小数点对齐，小数点后位数相同，零偏差 ( )。",
    options: ["必须标出", "不必标出", "文字说明", "用符号表示"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_4",
    text: "局部剖视图用波浪线作为剖与未剖部分的分界线，波浪线的粗细是 ( ) 粗细的 1/2。",
    options: ["细实线", "粗实线", "点划线", "虚线"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_5",
    text: "绘制零件图的首要问题是对零件进行 ( ) 进而确定合理的表达方案。",
    options: ["材料分析", "形体分析", "性能分析", "尺寸分析"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_6",
    text: "校对内径千分尺的零位，应 ( )。",
    options: ["使两个测量面合拢", "使用外径千分尺", "使用25mm标准样棒", "一般不用校对"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_7",
    text: "内径百分表表盘沿圆周有 ( ) 刻度。",
    options: ["50", "80", "100", "150"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_8",
    text: "位置公差中平行度符号是 ( )。",
    options: ["⊥", "//", "O", "∠"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_9",
    text: "零件 ( ) 具有的较小间距和峰谷所组成的微观几何形状不平的程度叫做表面粗糙度。",
    options: ["内表面", "外表面", "加工表面", "非加工表面"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_10",
    text: "机械传动是采用带轮、齿轮、轴等机械零件组成的传动装置来进行能量的 ( )。",
    options: ["转换", "传递", "输送", "交换"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_11",
    text: "道德的内容不包括 ( )。",
    options: ["道德意识", "道德观念", "道德关系", "道德活动"],
    correctAnswerIndex: 1,
    category: "职业道德",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_12",
    text: "以下有关社会主义职业道德的说法，错误的是 ( )。",
    options: ["社会主义职业道德与共产主义的道德原则是完全一致的", "社会主义职业道德是建立在社会主义私有制经济基础上的新型职业道德", "社会主义职业道德以全心全意为人民服务为普遍要求", "社会主义职业道德具有最平等、最真诚的特点"],
    correctAnswerIndex: 1,
    category: "职业道德",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_13",
    text: "( ) 是指零件加工和测量而选定的基准。",
    options: ["设计基准", "工艺基准", "工序基准", "定位基准"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_14",
    text: "( ) 包括配合尺寸和主要零件间的相互位置关系。",
    options: ["外形总体尺寸", "规格、性能尺寸", "装配尺寸", "安装尺寸"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_15",
    text: "( ) 适用于单件和小批量生产的零件图上。",
    options: ["在基本尺寸后面用分式表示", "在孔或轴的基本尺寸后面，注出基本偏差代号和公差等级", "在孔或轴的基本尺寸后面，注出偏差值", "在孔或轴的基本尺寸后面，既注出基本偏差代号和公差等级，又同时注出上、下偏差值"],
    correctAnswerIndex: 3,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_16",
    text: "零件图中孔或轴公差带代号标注方法不正确的是 ( )。",
    options: ["在基本尺寸后面用分式表示", "在孔或轴的基本尺寸后面，注出基本偏差代号和公差等级", "在孔或轴的基本尺寸后面，注出偏差值", "在孔或轴的基本尺寸后面，既注出基本偏差代号和公差等级，又同时注出上、下偏差值"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_17",
    text: "( ) 是评定零件表面质量的一项重要技术指标。",
    options: ["表面光洁度", "平面度", "表面精度", "表面粗糙度"],
    correctAnswerIndex: 3,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_18",
    text: "( ) 常用于低速手用刀具，如手用丝锥、锉刀和锯条等。",
    options: ["碳素工具钢", "合金工具钢", "高速钢", "硬质合金"],
    correctAnswerIndex: 0,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_19",
    text: "( ) 是指当切削温度过高时，刀具材料的金相组织或化学成分发生变化，使刀具硬度降低引起的磨损。",
    options: ["机械磨损", "磨料磨损", "粘着磨损", "热效应磨损"],
    correctAnswerIndex: 3,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_20",
    text: "标准麻花钻 ( ) 是指前刀面与基面之间的夹角。",
    options: ["前角", "后角", "顶角", "横刃斜角"],
    correctAnswerIndex: 0,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_21",
    text: "当油中混入空气时，其 ( ) 将显著增加。",
    options: ["粘度", "膨胀性", "爬行", "抖动"],
    correctAnswerIndex: 1,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_22",
    text: "( ) 越大，表示粘度受温度的变化影响越小。",
    options: ["粘度", "粘度指数", "绝对粘度", "相对粘度"],
    correctAnswerIndex: 1,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_23",
    text: "液体静压力的方向总是沿着作用面的 ( )。",
    options: ["内法线方向", "外法线方向", "法线方向", "作用力方向"],
    correctAnswerIndex: 0,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_24",
    text: "液体流经管子细的地方流速 ( )。",
    options: ["小", "大", "不定", "恒定"],
    correctAnswerIndex: 1,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_25",
    text: "以下关于设备安装地基的形式论述，错误的是 ( )。",
    options: ["机床的重心是地基的形式的考量要素之一", "机床的重量是地基的形式的考量要素之一", "机床的结构是地基的形式的考量要素之一", "机床的价格是地基的形式的考量要素之一"],
    correctAnswerIndex: 3,
    category: "设备安装",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_26",
    text: "卧式车床的负载强度测试时一般选用 ( ) 方式装夹试件。",
    options: ["两顶针", "一夹一顶", "夹住一头", "一夹一顶加中心架"],
    correctAnswerIndex: 2,
    category: "设备调试",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_27",
    text: "以下选项不属铣床试运行前的准备工作内容的是 ( )。",
    options: ["主轴轴承的精度检查", "电气装置的清洁、紧固", "丝杆的清洗", "润滑油的油质检查"],
    correctAnswerIndex: 0,
    category: "设备调试",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_28",
    text: "铣床主运动空运行测试时，需进行 ( ) 空运转。",
    options: ["低进给量", "中进给量", "高进给量", "低、中、高进给量"],
    correctAnswerIndex: 3,
    category: "设备调试",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_29",
    text: "布氏硬度试验值的符号用 ( ) 表示。",
    options: ["HRC", "HRB", "HBS", "HV"],
    correctAnswerIndex: 2,
    category: "材料测试",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_30",
    text: "刨床主运动空运行测试时，各级转速的运转时间一般不少于 ( )。",
    options: ["5分钟", "10分钟", "15分钟", "20分钟"],
    correctAnswerIndex: 1,
    category: "设备调试",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_31",
    text: "刨床的负载强度测试时一般选用 ( ) 速度。",
    options: ["低位", "中位", "高位", "最高"],
    correctAnswerIndex: 0,
    category: "设备调试",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_32",
    text: "牛头刨床在 320~630mm 的行程内，宽度为 55~150mm 的范围内做工作精度检测时，上平面对基面的许差范围为 ( )。",
    options: ["0.03mm", "0.05mm", "0.07mm", "0.09mm"],
    correctAnswerIndex: 0,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_33",
    text: "以下关于设备验收步骤的论述正确的是 ( )。",
    options: ["负荷检测应放在空运行试车之后", "空运行试车应放在负荷检测之后", "静态精度检测应放在负荷检测之后", "静态精度检测应放在空运行试车之后"],
    correctAnswerIndex: 3,
    category: "设备验收",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_34",
    text: "小型畸形工件划线时最好采用的固定方法是 ( )。",
    options: ["加工机床", "平板", "V型铁上", "辅助工夹具"],
    correctAnswerIndex: 3,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_35",
    text: "大型工件划线，当工件长度超出划线平台 1/3 时，可采用 ( ) 法划线。",
    options: ["平台接长", "条型垫块调整", "零件移位", "拉线"],
    correctAnswerIndex: 3,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_36",
    text: "对于形端面沟槽凸轮，凸轮的实际轮廓线由 ( ) 构成。",
    options: ["外槽曲线", "内槽曲线", "过渡圆弧线", "过渡曲线"],
    correctAnswerIndex: 1,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_37",
    text: "质量概念的三个阶段，即 ( )。",
    options: ["符合标准质量、符合使用质量、符合需求质量", "符合产品质量、符合使用质量、符合需求质量", "符合标准质量、符合产品质量、符合使用质量", "符合标准质量、符合需求质量、符合产品质量"],
    correctAnswerIndex: 0,
    category: "质量管理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_38",
    text: "表示机器或部件规格或性能的尺寸称为 ( )。",
    options: ["性能尺寸", "装配尺寸", "安装尺寸", "外形尺寸"],
    correctAnswerIndex: 0,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_39",
    text: "光表面，微辨加工痕迹方向，其表面粗糙度值约为 ( )。",
    options: ["≤6.3", "≤3.2", "≤1.6", "≤0.8"],
    correctAnswerIndex: 0,
    category: "表面质量",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_40",
    text: "金属材料热处理时，奥氏体形成第三阶段称为 ( )。",
    options: ["残余渗碳体溶解", "奥氏体晶核长大", "奥氏体分成均匀化", "亚共析钢成核"],
    correctAnswerIndex: 0,
    category: "热处理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_41",
    text: "金属陶瓷具有 ( ) 的特点。",
    options: ["高强度、高温强度、低韧性、高耐蚀性", "高强度、高温强度、高韧性、低耐蚀性", "高强度、高温强度、高韧性、高耐蚀性", "高强度、低温强度、高韧性、高耐蚀性"],
    correctAnswerIndex: 0,
    category: "材料科学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_42",
    text: "( ) 能产生间歇动作。",
    options: ["棘轮传动机构", "齿轮传动机构", "螺纹传动机构", "摩擦传动"],
    correctAnswerIndex: 0,
    category: "机械机构",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_43",
    text: "按我国目前情况，精密加工一般指加工精度在 ( ) 范围内。",
    options: ["(0.1-10)μm", "(0.1-0.05)μm", "(1-5)μm", "(5-10)μm"],
    correctAnswerIndex: 0,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_44",
    text: "高碳合金钢的合金元素总含量 ( )。",
    options: [">5%", ">7%", ">10%", ">12%"],
    correctAnswerIndex: 2,
    category: "材料科学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_45",
    text: "矫正后产生冷硬的材料可在 ( ) 恢复其机械性能。",
    options: ["淬火之后", "淬火之前", "正火之后", "正火之前"],
    correctAnswerIndex: 0,
    category: "热处理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_46",
    text: "套类零件在加工时，为了保证相互位置的精度要求应遵循 ( ) 原则。",
    options: ["基准一致、互为基准", "基准统一、互为基准", "基准分离、互为基准", "基准统一、各为基准"],
    correctAnswerIndex: 1,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_47",
    text: "( ) 用于检验普通车床主轴的径向跳动、轴向窜动误差。",
    options: ["长检验棒", "短检验棒", "圆柱形检验棒", "V形垫铁"],
    correctAnswerIndex: 2,
    category: "设备检验",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_48",
    text: "当灌浆层与设备底座面接触要求较高时，宜采用 ( ) 进行灌浆。",
    options: ["细碎石混凝土", "普通混凝土", "无收缩混凝土", "高强混凝土"],
    correctAnswerIndex: 2,
    category: "设备安装",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_49",
    text: "以下不属于车床试运行前的检查工作选项是 ( )。",
    options: ["外露的导轨副、部件应清洗洁净...", "机床的移动部件...", "电气控制正常...", "准备工作应在恒温条件下进行"],
    correctAnswerIndex: 3,
    category: "设备调试",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_50",
    text: "车床端面平面度精车时的检验精度规定为 ( )。",
    options: ["≤0.02mm", "≤0.03mm", "≤0.04mm", "≤0.05mm"],
    correctAnswerIndex: 0,
    category: "设备检验",
    created: FIXED_TIMESTAMP
  },
  // --- Batch 2 (51-150) ---
  {
    id: "static_51",
    text: "铣床的一级保养不包括 ( )。",
    options: ["铣床外部清洁工作", "铣床润滑系统的检查", "铣床操纵机构的检查", "铣床各个传动机构的检查"],
    correctAnswerIndex: 3,
    category: "设备保养",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_52",
    text: "铣床空运行试验时，( ) 是检测的重要项目之一。",
    options: ["主轴轴承的温度和温升", "主轴轴颈的温升和温升", "主传动器的温度和温升", "主传动器的温升和温升"],
    correctAnswerIndex: 0,
    category: "设备调试",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_53",
    text: "铣床负载测试中，转速不低于空运行时的 ( )。",
    options: ["5% 以上", "7% 以上", "10% 以上", "15% 以上"],
    correctAnswerIndex: 0,
    category: "设备调试",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_54",
    text: "以下项目中，属于铣床工作精度测试的内容是 ( )。",
    options: ["各档位运转情况", "最高转速", "工件垂直度", "正常噪声"],
    correctAnswerIndex: 2,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_55",
    text: "以下关于牛头刨床运行速度的论述，正确是 ( )。",
    options: ["行程越长则速度应越快", "行程越短则速度应越慢", "行程长与速度成正比", "行程短与速度成反比"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_56",
    text: "行程长度与试验压力 ( ) 作用在设备基础上，行程越长压力应不小于设备。",
    options: ["之和", "之差", "之积", "无关系"],
    correctAnswerIndex: 3,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_57",
    text: "在冲床中，往往用一个滑块代替 ( )。",
    options: ["曲柄", "曲柄", "摇杆", "连杆"],
    correctAnswerIndex: 3,
    category: "机械机构",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_58",
    text: "下列四种固定方法中，适用于重载和经常拆装的轴承的固定方法是 ( )。",
    options: ["圆螺母固定", "用轴肩固定", "用钢丝固定", "用弹性挡圈固定"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_59",
    text: "标准圆柱齿轮的压力角是 ( )。",
    options: ["15°", "20°", "45°", "0°"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_60",
    text: "深沟球轴承的滚动轴承类型代号是 ( )。",
    options: ["4", "5", "6", "0"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_61",
    text: "( ) 是用来减省人力脑力、完成做功或转换能量的装置。",
    options: ["机器", "部件", "零件", "构件"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_62",
    text: "普通 V 带的横截面为 ( )。",
    options: ["机器", "部件", "零件", "构件"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_63",
    text: "避免根切的最少齿数 ( )。",
    options: ["17", "20", "16", "18"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_64",
    text: "缝纫机踏板机构采用的是 ( ) 机构。",
    options: ["曲柄摇杆", "双曲柄", "双曲柄", "偏心轮机构"],
    correctAnswerIndex: 0,
    category: "机械机构",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_65",
    text: "既支撑回转零件又传递动力的轴称为 ( )。",
    options: ["心轴", "传动轴", "转轴", "曲轴"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_66",
    text: "滚动轴承内径为 10mm，其它基本代号最后两位数字为 ( )。",
    options: ["00", "01", "02", "03"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_67",
    text: "社会主义职业道德的核心是 ( )。",
    options: ["为人民服务", "服务单位", "劳动纪律", "社会主义公有制"],
    correctAnswerIndex: 0,
    category: "职业道德",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_68",
    text: "平面运动的自由度数有 ( ) 个。",
    options: ["3", "6", "4", "5"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_69",
    text: "内燃机的配气机构采用了 ( ) 机构。",
    options: ["凸轮", "铰链四杆", "齿轮", "带传动"],
    correctAnswerIndex: 0,
    category: "机械机构",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_70",
    text: "用平面测量器具测量平面度误差时，评定平面度误差的最小区域为最少的两 ( ) 间的距离。",
    options: ["平行平面", "相交平面", "平行", "垂直平面"],
    correctAnswerIndex: 0,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_71",
    text: "对于较长导轨的直线度误差测量可用 ( )。",
    options: ["光线基准法", "实物基准法", "间接测量法", "直接测量法"],
    correctAnswerIndex: 0,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_72",
    text: "在斜面上钻孔，为防止钻头偏斜，可采用 ( )。",
    options: ["减小进给量", "增大切削速度", "减小切削", "铣出平面再钻孔"],
    correctAnswerIndex: 3,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_73",
    text: "薄板群钻把麻花钻两主切削刃磨成 ( )，并使两刃尖都低于中心尖。",
    options: ["圆弧刃", "斜刃", "内刃", "外刃"],
    correctAnswerIndex: 0,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_74",
    text: "光学量角器用来建立与基准线 ( ) 的辅助线。",
    options: ["平行", "垂直", "倾斜", "三角形"],
    correctAnswerIndex: 0,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_75",
    text: "在工件中钻削 φ10mm 孔，一个工人在数控工作台上钻 50mm 孔，在三坐标测量机上工作时间的数值 ( )。",
    options: ["最低", "最高", "相同", "无法确定"],
    correctAnswerIndex: 0,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_76",
    text: "下列四种机床中，加工效率最高的是 ( )。",
    options: ["双面铣床", "圆锯机", "滚齿机", "平面磨"],
    correctAnswerIndex: 0,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_77",
    text: "某一车床在双柱坐标镗床上镗孔，其同轴度误差属于 ( )。",
    options: ["定位误差", "夹紧误差", "调整误差", "加工"],
    correctAnswerIndex: 0,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_78",
    text: "普通车床车削圆锥时，可用 ( )。",
    options: ["靠模法", "分度法", "偏移尾座法", "圆棒面"],
    correctAnswerIndex: 2,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_79",
    text: "车床主电机的旋转运动经 ( ) 首先传入主轴箱。",
    options: ["带传动", "链传动", "齿轮传动", "联轴器"],
    correctAnswerIndex: 0,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_80",
    text: "在车床的组成部分中，没有床身的是 ( )。",
    options: ["落地车床", "立式车床", "六角车床", "自动车床"],
    correctAnswerIndex: 0,
    category: "机械设备",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_81",
    text: "标注形位公差代号时，形位公差框格左起第一格应填写( )。",
    options: ["形位公差项目名称", "形位公差项目符号", "形位公差数值及有关符号", "基准代号"],
    correctAnswerIndex: 1,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_82",
    text: "Ry 是表面粗糙度评定参数中( )的符号。",
    options: ["轮廓算术平均偏差", "微观不平度+点高度", "轮廓最大高度", "轮廓不平程度"],
    correctAnswerIndex: 2,
    category: "表面质量",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_83",
    text: "零件图中注写极限偏差时，上下偏差小数点( )小数点后位数相同，零偏差必须标注。",
    options: ["必须对齐", "不需对齐", "对齐不对齐两可", "依个人习惯"],
    correctAnswerIndex: 0,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_84",
    text: "绘制零件图对零件进行形体分析，确定主视图方向后，下一步是( )。",
    options: ["选择其它视图确定表达方案", "画出各个视图", "选择图幅，确定作图比例", "安排布图画基准线"],
    correctAnswerIndex: 0,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_85",
    text: "在机件的三视图中，机件上对应部分的主、左视图应( ) 。",
    options: ["长对齐", "高平齐", "宽相等", "高相等"],
    correctAnswerIndex: 1,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_86",
    text: "内径千分尺的活动套筒转动一圈，测微螺杆移动( )。",
    options: ["1mm", "0.5mm", "0.01mm", "0.001mm"],
    correctAnswerIndex: 1,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_87",
    text: "内径百分表表盘沿圆周有( )刻度。",
    options: ["50", "80", "100", "150"],
    correctAnswerIndex: 2,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_88",
    text: "孔的最小极限尺寸与轴的最大极限尺寸之代数差为正值叫( )。",
    options: ["间隙值", "最小间隙", "最大间隙", "最大过盈"],
    correctAnswerIndex: 1,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_89",
    text: "位置公差中平行度符号是( )。",
    options: ["⊥", "//", "◎", "∠"],
    correctAnswerIndex: 1,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_90",
    text: "带传动不能做到的是( )。",
    options: ["吸振和缓冲", "安全保护作用", "保证准确的传动比", "实现两轴中心较大的传动"],
    correctAnswerIndex: 2,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_91",
    text: "齿轮传动属啮合传动，齿轮齿廓的特定曲线，使其传动能( )。",
    options: ["保持传动比恒定不变", "保持高的传动效率", "被广泛应用", "实现大传动比传动"],
    correctAnswerIndex: 0,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_92",
    text: "液压传动是依靠( )来传递动力的。",
    options: ["油液内部的压力", "密封容积的变化", "油液的流动", "活塞的运动"],
    correctAnswerIndex: 0,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_93",
    text: "液压系统中的执行部分是指( )。",
    options: ["液压泵", "液压缸", "各种控制阀", "输油管、油箱等"],
    correctAnswerIndex: 1,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_94",
    text: "液压系统不可避免的存在( )故其传动比不能保持严格准确。",
    options: ["泄漏现象", "摩擦阻力", "流量损失", "压力损失"],
    correctAnswerIndex: 0,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_95",
    text: "车刀切削部分材料的硬度不能低于( )。",
    options: ["HRC90", "HRC70", "HRC60", "HRC50"],
    correctAnswerIndex: 2,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_96",
    text: "高速钢车刀的( )较差，因此不能用于高速切削。",
    options: ["强度", "硬度", "耐热性", "工艺性"],
    correctAnswerIndex: 2,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_97",
    text: "当磨损限度相同时，刀具寿命愈短，表示刀具磨损发生( )。",
    options: ["愈快", "愈慢", "不变", "很快"],
    correctAnswerIndex: 0,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_98",
    text: "长方体工件定位，在主要基准面上应分布( )支承点，并要在同一平面上。",
    options: ["一个", "两个", "三个", "四个"],
    correctAnswerIndex: 2,
    category: "工装夹具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_99",
    text: "钻床夹具的类型在很大程度上决定于被加工孔的( )。",
    options: ["精度", "大小", "分布", "方向"],
    correctAnswerIndex: 0,
    category: "工装夹具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_100",
    text: "为保证机床操作者的安全，机床照明灯的电压应选( )。",
    options: ["380V", "220V", "110V", "36V以下"],
    correctAnswerIndex: 3,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_101",
    text: "感应加热表面淬火，电流频率越高，淬硬层深度( )。",
    options: ["越深", "越浅", "不变", "越大"],
    correctAnswerIndex: 1,
    category: "热处理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_102",
    text: "退火的目的是( )。",
    options: ["提高硬度和耐磨性", "降低硬度，提高塑性", "提高强度和韧性", "改善回火组织"],
    correctAnswerIndex: 1,
    category: "热处理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_103",
    text: "将钢件加热、保温，然后在空气中冷却的热处理工艺叫( )。",
    options: ["回火", "退火", "正火", "淬火"],
    correctAnswerIndex: 2,
    category: "热处理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_104",
    text: "( )完全依赖于零件制造精度的装配方法是完全互换法。",
    options: ["装配精度", "加工精度", "加工误差", "减少误差"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_105",
    text: "常用的分度头有 FW100、( )、FW160等几种。",
    options: ["FW110", "FW120", "FW125", "FW140"],
    correctAnswerIndex: 2,
    category: "机械设备",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_106",
    text: "锉削速度一般为每分钟( )左右。",
    options: ["2030次", "3060次", "4070次", "5080次"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_107",
    text: "锯路有交叉形还有( )。",
    options: ["波浪形", "八字形", "鱼鳞形", "螺旋形"],
    correctAnswerIndex: 0,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_108",
    text: "锯条安装应使齿尖的方向( )。",
    options: ["朝左", "朝右", "朝前", "朝后"],
    correctAnswerIndex: 2,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_109",
    text: "在高强度材料上钻孔时，为使润滑膜有足够的强度可在切削液中加( )。",
    options: ["机油", "水", "硫化切削油", "煤油"],
    correctAnswerIndex: 2,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_110",
    text: "使用普通高速钢铰刀在钢件上铰孔，其机铰切削速度不应超过( )。",
    options: ["8m/min", "10m/min", "15m/min", "20m/min"],
    correctAnswerIndex: 1,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_111",
    text: "孔径较大时，应取( )的切削速度。",
    options: ["任意", "较大", "较小", "中速"],
    correctAnswerIndex: 2,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_112",
    text: "攻丝进入自然旋进阶段时，两手旋转用力要均匀并要经常倒转( )圈。",
    options: ["12圈", "1/41/2圈", "1/51/8圈", "1/81/10圈"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_113",
    text: "要在铸铁工件上攻丝其底孔直径应是螺纹大径减去( )。",
    options: ["一个螺矩", "1.05个螺矩", "2个螺矩", "0.5个螺矩"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_114",
    text: "套丝前圆杆直径应( )螺纹的大径尺寸。",
    options: ["稍大于", "稍小于", "等于", "大于或等于"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_115",
    text: "机床导轨和滑行面，在机械加工之后，常用( )方法进行加工。",
    options: ["锉削", "刮削", "研磨", "錾削"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_116",
    text: "显示剂的种类有红丹粉和( )。",
    options: ["铅油", "蓝油", "机油", "矿物油"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_117",
    text: "轴承内孔的刮削精度除要求有一定数目的接触点，还应根据情况考虑接触点的( )。",
    options: ["合理分布", "大小情况", "软硬程度", "高低分布"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_118",
    text: "刮削中，采用正研往往会使平板产生( )。",
    options: ["平面扭曲现象", "研点达不到要求", "一头高一头低", "凹凸不平"],
    correctAnswerIndex: 3,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_119",
    text: "狭窄平面研磨时，用金属块做“导靠”采用( )研磨轨迹。",
    options: ["8字形", "螺旋形", "直线形", "圆形"],
    correctAnswerIndex: 2,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_120",
    text: "矫直棒料时，为消除因弹性变形所产生的回翘可( )一些。",
    options: ["适当少压", "用力小", "用力大", "使其反向弯曲塑性变形"],
    correctAnswerIndex: 3,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_121",
    text: "金属板四周呈波纹状，用延展法进行矫平时，锤击点应( )。",
    options: ["从一边向另一边", "从中间向四周", "从一角开始", "从四周向中间"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_122",
    text: "为防止弯曲件拉裂(或压裂)，必须限制工件的( )。",
    options: ["长度", "弯曲半径", "材料", "厚度"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_123",
    text: "工件弯曲后( )长度不变。",
    options: ["外层材料", "中间材料", "中性层材料", "内层材料"],
    correctAnswerIndex: 2,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_124",
    text: "零件的清理、清洗是( )的工作要点。",
    options: ["装配工作", "装配工艺过程", "装配前准备工作", "部件装配工作"],
    correctAnswerIndex: 2,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_125",
    text: "下面( )不属于装配工艺过程的内容。",
    options: ["装配工序有工步的划分", "装配工作", "调整、精度检修和试车", "喷漆、涂油、装箱"],
    correctAnswerIndex: 3,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_126",
    text: "装配前准备工作主要包括零件的清理和清洗、零件的密封性试验和( )。",
    options: ["旋转件的平衡试验", "静不平衡", "动不平衡", "旋转件不平衡试验"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_127",
    text: "为消除零件因偏重而引起振动，必须进行( )。",
    options: ["平衡试验", "水压试验", "气压试验", "密封试验"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_128",
    text: "下面( )不是制定装配工艺规程的原则。",
    options: ["保证产品的装配质量", "合理安排装配工序", "尽可能少占车的生产面积", "成批生产"],
    correctAnswerIndex: 3,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_129",
    text: "分度头结构不包括的部分是( )。",
    options: ["壳体", "主轴", "分度机构和分度盘", "齿轮"],
    correctAnswerIndex: 3,
    category: "机械设备",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_130",
    text: "轮齿的( )应用涂色法检查。",
    options: ["啮合质量", "接触斑点", "齿侧间隙", "接触精度"],
    correctAnswerIndex: 3,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_131",
    text: "立式钻床的主要部件包括主轴变速箱、进给变速箱、主轴和( )。",
    options: ["进给手柄", "操纵结构", "齿条", "钢球接合子"],
    correctAnswerIndex: 2,
    category: "机械设备",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_132",
    text: "立钻Z525主轴最高转速为( )。",
    options: ["97r/min", "1360r/min", "1420r/min", "480r/min"],
    correctAnswerIndex: 1,
    category: "机械设备",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_133",
    text: "规定预紧力的螺纹连接，常用控制扭矩法、控制扭角法和( )来保证准确的预紧力。",
    options: ["控制工件变形法", "控制螺栓伸长法", "控制螺栓变形法", "控制螺母变形法"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_134",
    text: "螺纹装配有双头螺栓的装配和( )的装配。",
    options: ["螺母", "螺钉", "螺母和螺钉", "特殊螺纹"],
    correctAnswerIndex: 2,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_135",
    text: "静连接( )装配，要有较少的过盈量，若过盈量较大，则应将套件加热到80-120°后进行装配。",
    options: ["紧键", "松键", "花键", "平键"],
    correctAnswerIndex: 2,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_136",
    text: "键的磨损一般都采取( )的修理办法。",
    options: ["更换键", "锉配键", "压入法", "试配法"],
    correctAnswerIndex: 0,
    category: "机械维修",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_137",
    text: "当过盈量及配合尺寸( )时，常采用温差法装配。",
    options: ["较大", "较小", "适合", "无要求"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_138",
    text: "过盈装配的压入配合时，压入过程必须连续压入速度以( )为宜。",
    options: ["0.1米/S", "0.5 米/s", "1520毫米/s", "24毫米/s"],
    correctAnswerIndex: 3,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_139",
    text: "在带动传中，不产生打滑的皮带是( )。",
    options: ["平带", "三角带", "齿形带", "可调节三角带"],
    correctAnswerIndex: 2,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_140",
    text: "带在轮上的包角不能太小，三角带包角不能小于( )，才保证不打滑。",
    options: ["150°", "100°", "120°", "180°"],
    correctAnswerIndex: 2,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_141",
    text: "链传动的损坏形式有( )链和链轮磨损及链断裂等。",
    options: ["链被拉长", "脱链", "轴颈弯曲", "链和链轮配合松动"],
    correctAnswerIndex: 0,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_142",
    text: "齿轮在轴上( )，当要求配合过盈量很大时，应采用液压套合法装配。",
    options: ["定位", "滑动", "空套", "固定"],
    correctAnswerIndex: 3,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_143",
    text: "蜗杆传动机构装配后，蜗轮在任何位置上，用手旋转蜗杆所需的扭矩( )。",
    options: ["均应相同", "大小不同", "相同或不同", "无要求"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_144",
    text: "蜗杆传动机构的装配顺序应根据具体情况而定，一般应先装( )。",
    options: ["蜗轮", "蜗杆", "轴承", "密封环"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_145",
    text: "联轴器的任务是传递扭矩，有时可作( )。",
    options: ["定位作用", "改变运动方向", "安全装置", "支承作用"],
    correctAnswerIndex: 2,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_146",
    text: "( )联轴器在工作时，允许两轴线有少量径向偏移和歪斜。",
    options: ["凸缘式", "万向节", "滑块式", "十字沟槽式"],
    correctAnswerIndex: 3,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_147",
    text: "离合器装配的主要技术要求之一是能够传递足够的( )。",
    options: ["力矩", "弯矩", "扭矩", "力偶力"],
    correctAnswerIndex: 2,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_148",
    text: "整体式、剖分式、内柱外锥式向心滑动轴承是按轴承的( )形式不同划分的。",
    options: ["结构", "承受载荷", "润滑", "获得液体摩擦"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_149",
    text: "整体式向心滑动轴承是用( )装配的。",
    options: ["热胀法", "冷配法", "压入法", "爆炸法"],
    correctAnswerIndex: 2,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_150",
    text: "单列圆锥滚子轴承在装配使用过程中，可通过调整内外套圈的轴向位置来获得合适的( )。",
    options: ["轴向游隙", "径向游隙", "轴向移动", "径向位移"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  // --- Batch 3 (151-250) ---
  {
    id: "static_151",
    text: "采用定向装配的方法时，主轴上后轴承的精度应比前轴承( )。",
    options: ["低一级", "低二级", "高一级", "高二级"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_152",
    text: "轴和其上零件装配后运转平稳是( )的装配要求。",
    options: ["轴组", "机器", "轴承", "齿轮轴"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_153",
    text: "单缸四冲程柴油机的工作包含有( )。",
    options: ["进气行程", "压缩和膨胀行程", "排气行程", "A、B、C 全包括"],
    correctAnswerIndex: 3,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_154",
    text: "点火提前呈( )状态时，气体膨胀压力将阻碍活塞向上运动，使汽油机有效功率减小。",
    options: ["过大", "过小", "适中", "等于零"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_155",
    text: "( )装卸钻头时，按操作规程必须用钥匙。",
    options: ["电磨头", "电剪刀", "手电钻", "钻床"],
    correctAnswerIndex: 2,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_156",
    text: "危险品仓库应设( )。",
    options: ["办公室", "专人看管", "避雷设备", "纸筒"],
    correctAnswerIndex: 2,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_157",
    text: "起吊工作物，试吊离地面( )，经过检查确认稳妥，方可起吊。",
    options: ["1 米", "1.5米", "0.3米", "0.5米"],
    correctAnswerIndex: 2,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_158",
    text: "工作时( )穿工作服和鞋。",
    options: ["可根据具体情况", "必须", "可以不", "无限制"],
    correctAnswerIndex: 1,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_159",
    text: "砂轮机要安装在( )。",
    options: ["场地边沿", "场地进出口", "场地中央", "靠钳台"],
    correctAnswerIndex: 0,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_160",
    text: "把直流电能转换成机械能，并输出机械转矩的电动机叫( )。",
    options: ["直流电动机", "同步式电动机", "异步式电动机", "鼠笼式电动机"],
    correctAnswerIndex: 0,
    category: "电工基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_161",
    text: "画出各个视图是绘制零件图的( )。",
    options: ["第一步", "第二步", "第三步", "第四步"],
    correctAnswerIndex: 1,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_162",
    text: "三视图的投影规律是( )。",
    options: ["长相等、高相等、宽相等", "长对正、高对正、宽对正", "长对正、高平齐、宽相等", "长相等、高平齐、宽对正"],
    correctAnswerIndex: 2,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_163",
    text: "国标规定螺纹的牙顶用( )。",
    options: ["虚线", "细实线", "点划线", "粗实线"],
    correctAnswerIndex: 3,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_164",
    text: "内径百分表盘面有长短两个指针，短指针一格表示( )mm。",
    options: ["1", "0.1", "0.01", "10"],
    correctAnswerIndex: 0,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_165",
    text: "两组导轨在水平面内的( )误差，可用方框水平仪检查。",
    options: ["垂直度", "平行度", "线轮廓度", "跳动"],
    correctAnswerIndex: 1,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_166",
    text: "Ra 在代号中仅用数值表示，单位为( )。",
    options: ["μm", "Cmm", "dmm", "mm"],
    correctAnswerIndex: 0,
    category: "表面质量",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_167",
    text: "( )的制造精度要求较高。",
    options: ["带轮", "摩擦轮", "链轮", "齿轮"],
    correctAnswerIndex: 3,
    category: "机械制造",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_168",
    text: "( )是造成工作台往复运动速度误差大的原因之一。",
    options: ["油缸两端的泄漏不等", "系统中混入空气", "活塞有效作用面积不一样", "液压缸容积不一样"],
    correctAnswerIndex: 0,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_169",
    text: "国产液压油的使用寿命一般都在( )。",
    options: ["三年", "二年", "一年", "一年以上"],
    correctAnswerIndex: 2,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_170",
    text: "刀具两次重磨之间纯切削时间的总和称为( )。",
    options: ["使用时间", "机动时间", "刀具磨损限度", "刀具寿命"],
    correctAnswerIndex: 3,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_171",
    text: "磨削加工的主运动是( )。",
    options: ["砂轮圆周运动", "工件旋转运动", "工作台移动", "砂轮架运动"],
    correctAnswerIndex: 0,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_172",
    text: "修整砂轮一般用( )。",
    options: ["油石", "金刚石", "硬质合金刀", "高速钢"],
    correctAnswerIndex: 1,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_173",
    text: "关于保险丝（即熔丝）的正确说法是( )。",
    options: ["只要在线路中安装保险丝，不论其规格如何都能起保险作用", "选择额定电流小的保险丝总是有利无弊的", "只要选用适当规格的保险丝，才能既保证电路工作又起保险作用", "可用同样粗细的铜丝来代替铅锑保险丝"],
    correctAnswerIndex: 2,
    category: "电工基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_174",
    text: "封闭环公差等于( )。",
    options: ["各组成环公差之差", "各组成环公差之和", "增环公差", "减环公差"],
    correctAnswerIndex: 1,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_175",
    text: "精锉时必须采用( )，使锉痕变直，纹理一致。",
    options: ["交叉锉", "旋转锉", "掏锉", "顺向锉"],
    correctAnswerIndex: 3,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_176",
    text: "锪孔时，进给量是钻孔的( )倍。",
    options: ["1~1.5", "2~3", "1/2", "3~4"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_177",
    text: "对孔的粗糙度影响较大的是( )。",
    options: ["切削速度", "钻头刚度", "钻头顶角", "进给量"],
    correctAnswerIndex: 3,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_178",
    text: "常用螺纹按( )可分为三角螺纹，方形螺纹，条形螺纹，半圆螺纹和锯齿螺纹等。",
    options: ["螺纹的用途", "螺纹轴向剖面内的形状", "螺纹的受力方式", "螺纹在横向剖面内的形状"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_179",
    text: "要套M10X1.5的外螺纹，其圆杆直径应为( )。",
    options: ["φ=9.8mm", "φ=10mm", "φ=9mm", "φ=10.5mm"],
    correctAnswerIndex: 0,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_180",
    text: "蓝油适用于( )刮削。",
    options: ["铸铁", "钢", "铜合金", "任何金属"],
    correctAnswerIndex: 2,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_181",
    text: "检验平扳只能检查工件的( )。",
    options: ["平面度和尺寸", "尺寸和直线度", "平面度和贴合程度", "平面度和垂直度"],
    correctAnswerIndex: 2,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_182",
    text: "刮刀精磨须在( )上进行。",
    options: ["油石", "粗砂轮", "油砂轮", "都可以"],
    correctAnswerIndex: 0,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_183",
    text: "精刮时要采用( )。",
    options: ["短刮法", "点刮法", "长刮法", "混合法"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_184",
    text: "研磨的基本原理包含着物理和( )的综合作用。",
    options: ["化学", "数学", "科学", "哲学"],
    correctAnswerIndex: 0,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_185",
    text: "精度较高的轴类零件，矫正时应用( )来检查矫正情况。",
    options: ["钢板尺", "平台", "游标卡尺", "百分表"],
    correctAnswerIndex: 3,
    category: "机械维修",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_186",
    text: "如果薄板表面有相邻几处凸起，应先在( )处轻轻锤击。",
    options: ["一个凸起", "最大凸起", "边缘凸起", "凸起交界"],
    correctAnswerIndex: 3,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_187",
    text: "板料在宽度方向上的弯曲，可利用金属材料的( )。",
    options: ["塑性", "弹性", "延伸性能", "导热性能"],
    correctAnswerIndex: 2,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_188",
    text: "中性层的实际位置与材料的( )有关。",
    options: ["弯形半径和材料厚度", "硬度", "长度", "强度"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_189",
    text: "装配前准备工作主要包括零件的清理和清洗、( )和旋转件的平衡试验。",
    options: ["零件的密封性试验", "气压法", "液压法", "静平衡试验"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_190",
    text: "零部件在径向位置上有偏重但由此产生的惯性力合力不通过旋转件重心，这种不平衡称( )。",
    options: ["静不平衡", "动不平衡", "静平衡", "动平衡"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_191",
    text: "装配精度检验包括( )检验和几何精度检验。",
    options: ["密封性", "功率", "灵活性", "工作精度"],
    correctAnswerIndex: 3,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_192",
    text: "装配尺寸链是指全部组成尺寸为( )设计尺寸所形成的尺寸链。",
    options: ["同一零件", "不同零件", "零件", "组成环"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_193",
    text: "装配尺寸链的解法有( )。",
    options: ["查表法", "统计法", "计算法", "公式法"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_194",
    text: "分度头的主轴轴心线能相对于工作台平面向上90°和向下( )。",
    options: ["10°", "45°", "90°", "120°"],
    correctAnswerIndex: 0,
    category: "机械设备",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_195",
    text: "要在一圆盘面划出六边形，问每划( )条线，分度头上的手柄应摇6·2/3周，再划第二条线。",
    options: ["一", "二", "三", "四"],
    correctAnswerIndex: 0,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_196",
    text: "立钻Z525( )最高转速是1360r/min。",
    options: ["主轴", "主轴进给量", "第二轴", "第六轴"],
    correctAnswerIndex: 0,
    category: "机械设备",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_197",
    text: "立钻电动机二级保养要按需要拆洗电机，更换( )润滑剂。",
    options: ["20#机油", "40#机油", "锂基润滑脂", "1#钙基润滑脂"],
    correctAnswerIndex: 2,
    category: "设备保养",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_198",
    text: "用( )使预紧力达到给定值的方法是控制扭矩法。",
    options: ["套筒扳手", "测力扳手", "通用扳手", "专业扳手"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_199",
    text: "( )装配有双头螺栓的装配和螺母螺钉装配。",
    options: ["机器", "部件", "总", "螺纹"],
    correctAnswerIndex: 3,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_200",
    text: "静连接花键装配，要有较少的过盈量，若过盈量较大，则应将套件加热到( )后进行装配。",
    options: ["100°", "80°120°", "150°", "200°"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_201",
    text: "( )的调整方法是靠改变两带轮中心距或用张紧轮张紧。",
    options: ["摩擦力", "拉力", "压力", "张紧力"],
    correctAnswerIndex: 3,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_202",
    text: "带轮相互位置不准确会引起带张紧不均匀而过快磨损，对中心距不大的测量方法是( )。",
    options: ["长直尺", "卷尺", "拉绳", "皮尺"],
    correctAnswerIndex: 0,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_203",
    text: "链传动中，链的下垂度( )为宜。",
    options: ["5%L", "4%L", "3%L", "2%L"],
    correctAnswerIndex: 3,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_204",
    text: "影响齿轮传动精度的因素包括( )，齿轮的精度等级，齿轮副的侧隙要求及齿轮副的接触斑点要求。",
    options: ["运动精度", "接触精度", "齿轮加工精度", "工作平稳性"],
    correctAnswerIndex: 2,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_205",
    text: "转速( )的大齿轮装在轴上后应作平衡检查，以免工作时产生过大振动。",
    options: ["高", "低", "1500r/min", "1440r/min"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_206",
    text: "轮齿的( )应用涂色法检查。",
    options: ["啮合质量", "接触斑点", "齿侧间隙", "接触精度"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_207",
    text: "普通圆柱蜗杆传动的精度等级有( )个。",
    options: ["18", "15", "12", "10"],
    correctAnswerIndex: 2,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_208",
    text: "蜗杆传动机构的装配顺序，应根据具体情况而定，以下叙述正确的是( )。",
    options: ["先装蜗杆，后装蜗轮", "先装轴承", "先装蜗轮，后装蜗杆", "以上均不对"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_209",
    text: "十字沟槽式联轴器在工作时，允许两轴线有少量( )偏移和歪斜。",
    options: ["径向", "端面", "轴向", "周向"],
    correctAnswerIndex: 0,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_210",
    text: "圆锥式摩擦离合器在装配时必须用 ( )方法检查两圆锥面接触情况。",
    options: ["跑合", "压铅", "仪器测量", "涂色"],
    correctAnswerIndex: 3,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_211",
    text: "当受力超过一定限度时，自动打滑的离合器叫( )。",
    options: ["侧齿式离合器", "内齿离合器", "摩擦离合器", "柱销式离合器"],
    correctAnswerIndex: 2,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_212",
    text: "向心滑动轴承和推力滑动轴承是按轴承( )不同划分的。",
    options: ["结构形式", "承受载荷方向", "润滑状态", "获得液体摩擦方法"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_213",
    text: "剖分式轴瓦安装在轴承中无论在圆周方向或轴向都不允许有( )。",
    options: ["间隙", "位移", "定位", "接触"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_214",
    text: "轴承合金由于( )不能单独作轴瓦。",
    options: ["强度很低", "强度很高", "强度一般", "强度较高"],
    correctAnswerIndex: 0,
    category: "材料科学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_215",
    text: "典型的滚动轴承由内圈、外圈、( )、保持架四个基本元件组成。",
    options: ["滚动体", "球体", "圆柱体", "圆锥体"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_216",
    text: "滚动轴承型号在( )中表示。",
    options: ["前段", "中段", "后段", "前、中、后三段"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_217",
    text: "内燃机按( )分类，有往复活塞式内然机、旋转活塞式内燃机和涡轮式内燃机等。",
    options: ["基本工作原理", "所用燃料", "工作循环冲程数", "运动形式"],
    correctAnswerIndex: 3,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_218",
    text: "内燃机是将热能转变成( )的一种热力发动机。",
    options: ["机械能", "动能", "运动", "势能"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_219",
    text: "柴油机的主要( )是曲轴。",
    options: ["运动件", "工作件", "零件", "组成"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_220",
    text: "汽油机工作时，曲轴每转2周，各缸均点火( )。",
    options: ["四次", "三次", "五次", "一次"],
    correctAnswerIndex: 3,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_221",
    text: "拆卸时的基本原则，拆卸顺序与装配顺序( )。",
    options: ["相同", "相反", "也相同也不同", "基本相反"],
    correctAnswerIndex: 1,
    category: "机械维修",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_222",
    text: "对于形状简单的静止配合件拆卸时，可用( )。",
    options: ["拉拔法", "顶压法", "温差法", "破坏法"],
    correctAnswerIndex: 0,
    category: "机械维修",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_223",
    text: "被腐蚀的金属表面当受到机械磨损作用时，将( )磨损。",
    options: ["加剧", "减少", "停止", "产生"],
    correctAnswerIndex: 0,
    category: "表面质量",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_224",
    text: "传动精度高，工作平稳，无噪音，易于自锁，能传递较大的扭矩，这是( )特点。",
    options: ["螺旋传动机构", "蜗轮蜗杆传动机构", "齿轮传动机构", "带传动机构"],
    correctAnswerIndex: 1,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_225",
    text: "( )间隙直接影响丝杠螺母副的传动精度。",
    options: ["轴向", "法向", "径向", "齿顶"],
    correctAnswerIndex: 0,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_226",
    text: "用检查棒校正丝杠螺母副( )时，为消除检验棒在各支承孔中的安装误差，可将检验棒转过180°后用测量一次，取其平均值。",
    options: ["同轴度", "垂直度", "平行度", "跳动"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_227",
    text: "操作钻床时，不能戴( )。",
    options: ["帽子", "眼镜", "手套", "口罩"],
    correctAnswerIndex: 2,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_228",
    text: "( )仓库应设避雷设备。",
    options: ["危险品", "任何", "贵重物品", "劳保"],
    correctAnswerIndex: 0,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_229",
    text: "起重机在起吊较重物件时，应先将重物吊离地面( )，检查后确认正常的情况下方可继续工作。",
    options: ["10mm 左右", "10cm左右", "50mm左右", "50cm左右"],
    correctAnswerIndex: 1,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_230",
    text: "使用锉刀时不能( )。",
    options: ["推锉", "来回锉", "单手锉", "双手锉"],
    correctAnswerIndex: 2,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_231",
    text: "钻床变速前应( )。",
    options: ["停车", "取下钻头", "取下工件", "断电"],
    correctAnswerIndex: 0,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_232",
    text: "工作完毕后，所用过的( )要清理、涂油。",
    options: ["量具", "工具", "工量具", "器具"],
    correctAnswerIndex: 2,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_233",
    text: "( )是一种自动的电磁式开关。",
    options: ["熔断器", "接触器", "逆变器", "电容器"],
    correctAnswerIndex: 1,
    category: "电工基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_234",
    text: "把直流电能转换成( )，并输出机械转矩电动机叫直流电动机。",
    options: ["动能", "热能", "机械能", "机械运动"],
    correctAnswerIndex: 2,
    category: "电工基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_235",
    text: "一般零件的加工工艺线路( )。",
    options: ["粗加工", "精加工", "粗加工一精加工", "精加工一粗加工"],
    correctAnswerIndex: 2,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_236",
    text: "下列关于职业道德的说法中，正确的是( )",
    options: ["职业道德与人格无关。", "职业道德的提高与个人的利益无关。", "职业道德的养成只能靠教化。", "职业道德从一个侧面反映人的整体道德素质。"],
    correctAnswerIndex: 3,
    category: "职业道德",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_237",
    text: "诚实守信与办事公正合法的职业道德主要体现有误的是( )",
    options: ["工作勇于负责...", "全体员工应该...", "可以在商业活动中发布虚假、片面信息误导合作伙伴和客户以提高业绩。", "员工应培养..."],
    correctAnswerIndex: 2,
    category: "职业道德",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_238",
    text: "内燃机的配气机构采用了( )机构。",
    options: ["凸轮", "铰链四杆", "齿轮", "槽轮"],
    correctAnswerIndex: 0,
    category: "机械机构",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_239",
    text: "自行车前轴是( )",
    options: ["固定心轴", "转动心轴", "转轴", "挠性钢丝软轴"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_240",
    text: "表示机器或部件规格或性能的尺寸称为( )",
    options: ["性能尺寸", "装配尺寸", "安装尺寸", "外形尺寸"],
    correctAnswerIndex: 0,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_241",
    text: "零件在加工过程中间获得的尺寸称为( )",
    options: ["增环", "减环", "封闭环", "组成环"],
    correctAnswerIndex: 3,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_242",
    text: "箱体类零件的主要技术要求包括( )。",
    options: ["轴承孔的尺寸精度", "轴承孔的位置精度", "箱体主要平面的精度", "轴承孔的尺寸精度、轴承孔的位置精度、箱体主要平面的精度"],
    correctAnswerIndex: 3,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_243",
    text: "一些不太重要、受力不大、尺寸较小、结构简单的齿轮可直接选( )。",
    options: ["铸造毛坯", "锻造毛坯", "铸钢毛坯", "棒料毛坯"],
    correctAnswerIndex: 3,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_244",
    text: "套类零件在加工时，为了保证相互位置的精度要求应遵循( )原则。",
    options: ["基准分离，互为基准", "基准统一，互为基准", "基准一致，互为基准", "基准统一，各为基准"],
    correctAnswerIndex: 1,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_245",
    text: "切削液具有( )作用。",
    options: ["冷却", "润滑", "防锈", "冷却、润滑、防锈"],
    correctAnswerIndex: 3,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_246",
    text: "样冲尖角一般磨成( )。",
    options: ["30°~40°", "40°~50°", "50°~60°", "45°~60°"],
    correctAnswerIndex: 3,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_247",
    text: "平面划线时应选择( )面作为划线基准。",
    options: ["1", "2", "3", "4"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_248",
    text: "錾削较硬材料时，錾子的楔角约取( )。",
    options: ["40°～50°", "50°～60°", "60°～70°", "70°～80°"],
    correctAnswerIndex: 2,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_249",
    text: "( )能恢复矫正后产生冷硬的材料的机械性能。",
    options: ["正火", "淬火", "退火", "回火"],
    correctAnswerIndex: 2,
    category: "热处理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_250",
    text: "普通 V 带传动有( )种类型。",
    options: ["7", "4", "3", "5"],
    correctAnswerIndex: 0,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  // --- Batch 4 (251-350) ---
  {
    id: "static_251",
    text: "热继电器主电路不通，可能的原因是( )。",
    options: ["负载侧短路电流过大", "热元件烧断", "整定值偏大", "操作频率过高"],
    correctAnswerIndex: 1,
    category: "电工基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_252",
    text: "平面连杆机构中最常见的是( )。",
    options: ["四杆机构", "两杆机构", "三杆机构", "对称机构"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_253",
    text: "凸轮轮廓线上各点的压力角是( )。",
    options: ["不变的", "变化的", "相等的", "0"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_254",
    text: "( )用来支承转动零件，即只承受弯矩作用而不传递动力。",
    options: ["转轴", "心轴", "传动轴", "曲轴"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_255",
    text: "销主要用来固定零件之间的( )。",
    options: ["距离", "相对位置", "装配尺寸", "相对位移"],
    correctAnswerIndex: 1,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_256",
    text: "离合器主要用于轴与轴之间在机器运转过程中的( )与接合。",
    options: ["限制速度", "使两轴转向相同", "分离", "使一轴停止"],
    correctAnswerIndex: 2,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_257",
    text: "滑动轴承主要由轴承座、轴瓦、紧定螺钉和( )等组成。",
    options: ["支承", "轴承套", "润滑装置", "轴"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_258",
    text: "人为误差又称( )误差。",
    options: ["粗大", "一般", "测量", "加工"],
    correctAnswerIndex: 0,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_259",
    text: "在同一条件下，多次测量同一量值，误差的数值和符号按某一确定的规律变化的误差称( )误差。",
    options: ["人为", "随机", "变值", "方法"],
    correctAnswerIndex: 2,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_260",
    text: "用等高块、百分表和( )配合使用检验铣床工作台纵向和横行移动对工作台面的平行度。",
    options: ["平尺", "直尺", "百分表", "卡尺"],
    correctAnswerIndex: 0,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_261",
    text: "造成机床变形的具体原因有( )方面的。",
    options: ["设计", "安装", "配合", "结合"],
    correctAnswerIndex: 1,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_262",
    text: "机床上有些零件壁厚较薄，受力后就易产生( )。",
    options: ["变形", "破裂", "故障", "运动"],
    correctAnswerIndex: 0,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_263",
    text: "机床外部热源主要是热( )。",
    options: ["辐射", "传递", "传导", "平衡"],
    correctAnswerIndex: 0,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_264",
    text: "机床电机的振动属于机床( )振源。",
    options: ["内因", "内力", "内部", "外部"],
    correctAnswerIndex: 0,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_265",
    text: "噪声的频率范围在( )的居多。",
    options: ["10HZ-40HZ", "40HZ-60HZ", "80HZ-100HZ", "40HZ-10HZ"],
    correctAnswerIndex: 2,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_266",
    text: "零件( )误差产生原因有工艺系统热变形所引起的误差。",
    options: ["计量", "使用", "测量", "加工"],
    correctAnswerIndex: 3,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_267",
    text: "装夹误差包括夹紧误差、基准位移误差和( )不重合误差。",
    options: ["基面", "标准", "基准", "基础"],
    correctAnswerIndex: 2,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_268",
    text: "刀具误差对加工精度的影响随刀具的( )而异。",
    options: ["种类不同", "大小", "用途", "性能"],
    correctAnswerIndex: 0,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_269",
    text: "工艺系统有力的作用下产生变形和位移，加工工件时造成工件几何形状和尺寸( )。",
    options: ["公差", "偏差", "上差", "误差"],
    correctAnswerIndex: 3,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_270",
    text: "工艺系统受到的力有( )。",
    options: ["切削力", "作用力", "传递力", "制作力"],
    correctAnswerIndex: 0,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_271",
    text: "物体受力后的( )包括两方面:一是物体本身变形，二是物体接触面的变形。",
    options: ["位移", "变形", "变化", "移动"],
    correctAnswerIndex: 0,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_272",
    text: "在精加工时，切削深度及进给量小，切削力及变形小,可以修正粗加工时产生的( )。",
    options: ["上差", "下差", "公差", "误差"],
    correctAnswerIndex: 3,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_273",
    text: "关于减小热变形误差的措施错误的是( )。",
    options: ["在恒温室内对工件进行加工", "在室外对工件进行加工", "加工前预热机床使其在热平衡状态下进行加工", "加工时充分冷却减少温升"],
    correctAnswerIndex: 1,
    category: "设备精度",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_274",
    text: "溢流阀阻尼孔被堵塞使液压牛头刨床空运转时液压系统中压力( )。",
    options: ["超高", "超低", "过低", "过高"],
    correctAnswerIndex: 3,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_275",
    text: "磨床工作台纵向进给速度过高或工件的线速度与砂轮的线速度选择不当会造成磨出的工件面有( )缺陷。",
    options: ["不光洁", "划痕", "螺旋线", "粗糙度大"],
    correctAnswerIndex: 2,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_276",
    text: "双齿纹锉刀适用于锉( )材料。",
    options: ["软", "硬", "大", "厚"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_277",
    text: "锉削面常以( )量具来检查，如不透光，表示该面已平直。",
    options: ["游标卡尺", "深度千分尺", "游标高度尺", "刀口尺"],
    correctAnswerIndex: 3,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_278",
    text: "立钻( )二级保养要按需要拆洗电机，更换1号钙基润滑脂。",
    options: ["主轴", "进给箱", "电动机", "主轴和进给箱"],
    correctAnswerIndex: 2,
    category: "设备保养",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_279",
    text: "Z3040 型摇臂钻床主轴锥孔锥度为( )。",
    options: ["莫氏3号", "莫氏4号", "莫氏 5号", "莫氏6号"],
    correctAnswerIndex: 1,
    category: "机械设备",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_280",
    text: "用标准麻花钻加工铸铁时应将麻花钻修磨出双重顶角，其第二棱角值控制在( )。",
    options: ["70°～75°", "75°～80°", "85°～90°", "90°～95°"],
    correctAnswerIndex: 0,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_281",
    text: "标准麻花钻刃磨时要求两条主切削刃( )。",
    options: ["长度相等", "与轴线夹角相等", "高度相等", "长度高度夹角都相等"],
    correctAnswerIndex: 3,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_282",
    text: "在铰孔时若使用煤油做冷却润滑( )。",
    options: ["易使孔径扩大", "易使孔径缩小", "孔成锥形", "孔与端而不乘直"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_283",
    text: "用端面摩擦攻丝夹头可以攻( )的螺孔。",
    options: ["M10", "M16", "M20", "M22"],
    correctAnswerIndex: 2,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_284",
    text: "在套丝时若牙形太瘦是由手( )的缘故。",
    options: ["使用扭矩过大", "套入后仍使用较大压力", "压力过小", "双手转动不均"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_285",
    text: "蓝油用于精密工件和非铁金属以及( )工件的刮削。",
    options: ["钢", "合金", "铸铁", "锻件"],
    correctAnswerIndex: 2,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_286",
    text: "( )是利用尺身和游标刻线间长度之差原理制成的量具，可用来测量长度、厚度、外径、内径和孔深等。",
    options: ["游标高度尺", "游标万能角度尺", "游标卡尺", "深度千分尺"],
    correctAnswerIndex: 2,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_287",
    text: "( )液压系统采用低粘度的液压油。",
    options: ["高压", "中压", "低压", "中、低压"],
    correctAnswerIndex: 0,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_288",
    text: "以下论述正确是( )。",
    options: ["机床不管任何时候一律不允许超负荷使用", "机床在有相应措施时，允许超负荷使用", "机床维护与保养全由维修人员负贵", "机床维护与保养全由操作工人负责"],
    correctAnswerIndex: 1,
    category: "设备保养",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_289",
    text: "清洗刀架、调整中、小拖板间隙属( )工作内容。",
    options: ["日常维护", "一级保养", "二级保养", "三级保养"],
    correctAnswerIndex: 1,
    category: "设备保养",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_290",
    text: "球墨铸铁的组织可以是( )。",
    options: ["铁素体+团絮状石墨", "铁素体+球状石墨", "铁素体+珠光体+片状石墨", "珠光体+片状石墨"],
    correctAnswerIndex: 1,
    category: "材料科学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_291",
    text: "圆柱齿轮传动的精度要求有运动精度、工作平稳性( )等几方面精度要求。",
    options: ["几何精度", "平行度", "垂直度", "接触精度"],
    correctAnswerIndex: 3,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_292",
    text: "在螺纹底孔的孔口倒角，丝锥开始切削时( )。",
    options: ["容易切入", "不易切入", "容易折断", "不易折断"],
    correctAnswerIndex: 0,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_293",
    text: "电动机的分类不正确的是( )。",
    options: ["异步电动机和同步电动机", "三相电动机和单相电动机", "主动电动机和被动电动机", "交流电动机和直流电动机"],
    correctAnswerIndex: 2,
    category: "电工基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_294",
    text: "电流对人体的伤害程度与( )无关。",
    options: ["通过人体电流的大小", "通过人体电流的时间", "电流通过人体的部位", "触电者的性格"],
    correctAnswerIndex: 3,
    category: "电工基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_295",
    text: "工企对环境污染的防治不包括( )。",
    options: ["防治大气污染", "防治水体污染", "防治噪声污染", "防治运输污染"],
    correctAnswerIndex: 3,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_296",
    text: "工序卡片是用来具体( )工人进行操作的一种工艺文件。",
    options: ["培训", "锻炼", "指导", "指挥"],
    correctAnswerIndex: 2,
    category: "工艺管理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_297",
    text: "保证装配精度的工艺之一有( )。",
    options: ["调整装配法", "间隙装配法", "过盈装配法", "过渡装配法"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_298",
    text: "构成机器最小的运动单元称( )。",
    options: ["零件", "机构", "构件", "分组件"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_299",
    text: "换向阀利用阀芯在阀体间的( )来变换油液流动的方向。",
    options: ["移动", "转动", "相对移动", "配合"],
    correctAnswerIndex: 2,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_300",
    text: "( )工作面是两键沿斜面拼合后相互平行的两个窄面,靠工作面上挤压和轴与轮毂的摩擦力传递转矩。",
    options: ["楔键", "平键", "半圆键", "切向键"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_301",
    text: "由于外来的灰尘微粒掉落的结果，使球形阀卡住会产生压力( )。",
    options: ["运动", "行动", "冲动", "振荡"],
    correctAnswerIndex: 3,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_302",
    text: "造成低速时滑枕有( )现象的原因是滑枕润滑不良。",
    options: ["时动时停", "爬行", "缓动", "慢动"],
    correctAnswerIndex: 1,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_303",
    text: "工件表面磨削时有突然拉毛痕迹的缺陷原因之一是( )砂轮磨粒脱落夹在砂轮和工件之间形成的。",
    options: ["粗粒度", "细粒度", "较粗粒度", "较细粒度"],
    correctAnswerIndex: 0,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_304",
    text: "1/50mm游标卡尺，游标上50小格与尺身上( )mm 对齐。",
    options: ["49", "39", "19", "29"],
    correctAnswerIndex: 0,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_305",
    text: "分度头的手柄转1周时，装夹在主轴上的工件转( )。",
    options: ["1周", "40 周", "1/40 周", "1/20周"],
    correctAnswerIndex: 2,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_306",
    text: "确定基本偏差主要是为了确定( )。",
    options: ["公差带的位置", "公差带的大小", "配合的精度", "工件的加工精度"],
    correctAnswerIndex: 0,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_307",
    text: "车床的( )即刀架的直线运动。",
    options: ["大拖板进给运动", "切入运动", "切削运动", "主运动"],
    correctAnswerIndex: 0,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_308",
    text: "( )圆锥销及开口销均有国家标准。",
    options: ["槽销", "特殊形状销", "安全销", "圆柱销"],
    correctAnswerIndex: 3,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_309",
    text: "线纹尺的刻线误差属于( )误差。",
    options: ["制造", "测量", "加工", "标准器具"],
    correctAnswerIndex: 3,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_310",
    text: "锯路有交叉形，还有( )。",
    options: ["波浪形", "八字形", "鱼鳞形", "骡旋形"],
    correctAnswerIndex: 0,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_311",
    text: "游标卡尺上端有两个爪是用来测量( )。",
    options: ["内孔", "沟槽", "齿轮公法线长度", "外径"],
    correctAnswerIndex: 0,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_312",
    text: "机铰时,应使工件( )装夹进行钻、铰工作,以保证铰刀中心线与钻孔中心线一致。",
    options: ["一次", "二次", "三次", "四次"],
    correctAnswerIndex: 0,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_313",
    text: "不符合安全用电措施的是( )。",
    options: ["火线必须进开关", "合理选择照明电压", "合理选择导线和熔丝", "移动电器不须接地保护"],
    correctAnswerIndex: 3,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_314",
    text: "液压传动不能( )。",
    options: ["实现无级调速", "传递较大的转矩", "保证严格传动比", "实现自动化"],
    correctAnswerIndex: 2,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_315",
    text: "控制阀是液压系统的( )元件。",
    options: ["换向", "控制", "压力", "蓄能"],
    correctAnswerIndex: 1,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_316",
    text: "旋转体在运转中既产生离心力又产生( )力偶矩叫动不平衡。",
    options: ["离心", "向心", "平衡", "运动"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_317",
    text: "浇铸巴氏合金轴瓦首先清理轴瓦基体然后对轴瓦基体浇铸表面( )。",
    options: ["镀锡", "镀铬", "镀锌", "镀"],
    correctAnswerIndex: 0,
    category: "材料科学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_318",
    text: "( )不属于液压辅助元件。",
    options: ["增压器", "滤油器", "压力表", "蓄能器"],
    correctAnswerIndex: 0,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_319",
    text: "下列说法中错误的是( )。",
    options: ["对于机件的肋...用粗实线将它与其邻接部分分开", "当视图中的轮廓线与重合断面的图形重叠时，视图中的轮廓线仍需完整的画出", "剖面图仅画出机件被切断处的断面形状", "剖视图除画出断面形状外，还需画出断面后的可见轮廓线"],
    correctAnswerIndex: 0,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_320",
    text: "读传动系统图的( )是研究各传动轴与传动件的连结形式...。",
    options: ["第一步", "第二步", "第三步", "第四步"],
    correctAnswerIndex: 2,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_321",
    text: "本身是一个部件用来连接，需要装在一起的零件或部件称( )。",
    options: ["组件", "部件", "基准零件", "基准部件"],
    correctAnswerIndex: 2,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_322",
    text: "构成机器的（产品）最小单元称( )。",
    options: ["零件", "部件", "组件", "分组件"],
    correctAnswerIndex: 0,
    category: "机械基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_323",
    text: "液压传动装置的控制、调节比较简单，操纵方便，便于实现( )。",
    options: ["自动化", "系列化", "标准化", "通用化"],
    correctAnswerIndex: 0,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_324",
    text: "曲柄摇杆机构属于( )。",
    options: ["空间连杆机构", "铰链四杆机构", "滑块四杆机构", "两杆机构"],
    correctAnswerIndex: 1,
    category: "机械机构",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_325",
    text: "螺旋传动的结构( )，工作连续平稳。",
    options: ["复杂", "简单", "标准化", "不确定"],
    correctAnswerIndex: 1,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_326",
    text: "联轴器性能要求能适应被联接两轴间的相互( )。",
    options: ["距离", "方向", "位置关系", "速度"],
    correctAnswerIndex: 2,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_327",
    text: "离合器按实现过程分为操纵式离合器与( )。",
    options: ["摩擦离合器", "自动离合器", "啮合离合器", "刚性离合器"],
    correctAnswerIndex: 1,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_328",
    text: "测量误差是指测量时所用的( )不完善所引起的误差。",
    options: ["办法", "程序", "手段", "方法"],
    correctAnswerIndex: 3,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_329",
    text: "旋转机械产生振动的原因之一有旋转体( )。",
    options: ["不均匀", "不一致", "不同心", "不同圆"],
    correctAnswerIndex: 0,
    category: "机械维修",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_330",
    text: "工件以平面定位时，定位误差包括( )位移误差和基准不重合误差。",
    options: ["标准", "基准", "基面", "基础"],
    correctAnswerIndex: 2,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_331",
    text: "工件残余应力是指在没有外力作用的情况下,存在于工件内部的应( )。",
    options: ["引力", "重力", "惯性力", "力"],
    correctAnswerIndex: 3,
    category: "力学基础",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_332",
    text: "当平面倾斜于投影面时，平面的投影反映出正投影法的（ ）基本特性。",
    options: ["真实性", "积聚性", "类似性", "收缩性"],
    correctAnswerIndex: 3,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_333",
    text: "圆柱被倾斜于轴线的平面切割后产生的截交线为( )。",
    options: ["圆形", "矩形", "椭圆", "直线"],
    correctAnswerIndex: 2,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_334",
    text: "关于“旋转视图”，下列说法错误的是（ )。",
    options: ["倾斜部分需先旋转后投影", "旋转视图仅适用于表达具有回转轴线的倾斜结构的实形", "旋转视图不加任何标注", "旋转视图可以不按投影关系配置"],
    correctAnswerIndex: 2,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_335",
    text: "下列说法中，正确的是( ）。",
    options: ["全剖视图用于内部结构较为复杂的机件", "当机件的形状接近对称时，不论何种情况都不...", "采用局部剖视图时,波浪线可以画到轮廓线的延长线上", "半剖视图用于内外形状都较为复杂的对称机件"],
    correctAnswerIndex: 3,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_336",
    text: "( )属于高速钢钢。",
    options: ["GCr6", "9SiCr", "W18Cr4V", "5CrMnMo"],
    correctAnswerIndex: 2,
    category: "材料科学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_337",
    text: "链传动是由( )和具有特殊齿形的链轮组成的传递运动和动力的传动。",
    options: ["齿条", "齿轮", "链条", "主动轮"],
    correctAnswerIndex: 2,
    category: "机械传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_338",
    text: "( ) 用于制造低速手用刀具。",
    options: ["碳素工具钢", "碳素结构钢", "合金工具钢", "高速钢"],
    correctAnswerIndex: 0,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_339",
    text: "在螺纹标注中,如果是左旋螺纹，应( )注明旋向。",
    options: ["省略", "用 RH", "用 LH", "用 L"],
    correctAnswerIndex: 2,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_340",
    text: "一张完整的零件图应包括( )。",
    options: ["一组图形、必要的尺寸、技术要求和标题栏", "一组图形、全部的尺寸、技术要求和标题栏", "一组图形、必要的尺寸、技术要求和明细栏", "一组图形、全部的尺寸、技术要求和明细栏"],
    correctAnswerIndex: 0,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_341",
    text: "绘制零件草图第一步为( )。",
    options: ["布置视图", "取剖视", "画主要部分投影", "标注尺寸"],
    correctAnswerIndex: 0,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_342",
    text: "零件图尺寸标注基本要求中的“合理”是指( )。",
    options: ["标注的尺寸既能保证设计要求，又便于加工和测量", "须符合制图标准", "布局要清晰", "即尺寸标注须做到定形尺寸、定位尺寸齐全"],
    correctAnswerIndex: 0,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_343",
    text: "对于尺寸基准,下列说法错误的是( )。",
    options: ["有时同一方向须要几个尺寸基准", "一个方向最少有一个主要基准", "一个方向最少有一个辅助基准", "长、宽、高三个方向必须都有基准"],
    correctAnswerIndex: 2,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_344",
    text: "图纸上尺寸标注默认的倒角度数是( )倒角。",
    options: ["30°", "45°", "60°", "90°"],
    correctAnswerIndex: 1,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_345",
    text: "下列说法错误的是( )。",
    options: ["平面图形中的尺寸...", "平面图形中的线段...", "只有定形尺寸和一个定位尺寸...称为中间线段", "只有定形尺寸..."],
    correctAnswerIndex: 2,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_346",
    text: "对于尺寸公差，下列叙述正确的是：( )",
    options: ["公差值前面可以标“＋\"号", "公差值前面可以标“－”号", "公差可以为零值", "公差值前面不应标“＋\".“－”号"],
    correctAnswerIndex: 3,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_347",
    text: "国标规定，单个圆柱齿轮的( )用粗实线绘制。",
    options: ["齿顶圆和齿顶线", "分度圆和分度线", "齿根圆和齿根线", "齿顶圆与齿根圆"],
    correctAnswerIndex: 0,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_348",
    text: "关于“同一零件在装配图中各剖视图中的剖面线”的画法,正确的是( )。",
    options: ["倾斜方向相反而间距不同", "倾斜方向一致而间距不同", "倾斜方向相反而间距相同", "倾斜方向一致而间距相同"],
    correctAnswerIndex: 3,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_349",
    text: "关于“明细栏”的说法,错误的是( )。",
    options: ["明细栏中包括序号...", "通常画在标题栏上方,应自上而下填写", "如位置不够...", "特殊情况下..."],
    correctAnswerIndex: 1,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_350",
    text: "离心泵是靠( )使液体获得压力的。",
    options: ["工作室容积间歇改变", "工作叶轮旋转", "流体活动能量", "以上都有可能"],
    correctAnswerIndex: 1,
    category: "流体力学",
    created: FIXED_TIMESTAMP
  },
  // --- Batch 5 (351-450) ---
  {
    id: "static_351",
    text: "对于尺寸公差，下列叙述正确的是：( )",
    options: ["公差值前面可以标“＋\"号", "公差值前面可以标“－”号", "公差可以为零值", "公差值前面不应标“＋\".“－”号"],
    correctAnswerIndex: 3,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_352",
    text: "国标规定，单个圆柱齿轮的( )用粗实线绘制。",
    options: ["齿顶圆和齿顶线", "分度圆和分度线", "齿根圆和齿根线", "齿顶圆与齿根圆"],
    correctAnswerIndex: 0,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_353",
    text: "关于“同一零件在装配图中各剖视图中的剖面线”的画法,正确的是( )。",
    options: ["倾斜方向相反而间距不同", "倾斜方向一致而间距不同", "倾斜方向相反而间距相同", "倾斜方向一致而间距相同"],
    correctAnswerIndex: 3,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_354",
    text: "关于“明细栏”的说法,错误的是( )。",
    options: ["明细栏中包括序号...", "通常画在标题栏上方,应自上而下填写", "如位置不够...", "特殊情况下..."],
    correctAnswerIndex: 1,
    category: "机械制图",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_355",
    text: "离心泵是靠( )使液体获得压力的。",
    options: ["工作室容积间歇改变", "工作叶轮旋转", "流体活动能量", "以上都有可能"],
    correctAnswerIndex: 1,
    category: "流体力学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_356",
    text: "单级卧式离心泵中,水封环的作用是( )。",
    options: ["防止空气进入泵", "防止液体流出", "增大液压", "以上都不对"],
    correctAnswerIndex: 0,
    category: "流体力学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_357",
    text: "下列各项中，不属于CAM工作范畴的内容是( )。",
    options: ["生产过程管理", "加工控制", "应力、应变分析", "质量控制"],
    correctAnswerIndex: 2,
    category: "计算机辅助制造",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_358",
    text: "计算机辅助制造进行的内容有( )。",
    options: ["进行过程控制及数控加工", "CAD", "工程分析", "机床调整"],
    correctAnswerIndex: 0,
    category: "计算机辅助制造",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_359",
    text: "计算机辅助制造应具有的主要特性是( ) 。",
    options: ["适应性、灵活性、高效率等", "准确性...", "系统性、继承性等", "知识性..."],
    correctAnswerIndex: 2,
    category: "计算机辅助制造",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_360",
    text: "在CAD/CAM 系统中，CAM是指( )。",
    options: ["计算机辅助设计", "计算机辅助制造", "计算机辅助工程", "计算机辅助工艺过程设计"],
    correctAnswerIndex: 1,
    category: "计算机辅助制造",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_361",
    text: "CAD/CAM 系统中软件分为几大类 他们是：( )。",
    options: ["系统软件、功能软件、应用软件", "系统软件、支撑软件、应用软件", "CAD/CAM 软件...", "以上都不是"],
    correctAnswerIndex: 0,
    category: "计算机辅助制造",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_362",
    text: "下列牌号中，属于工具钢的是 ( ) 。",
    options: ["20", "65Mn", "T10A", "Q235"],
    correctAnswerIndex: 2,
    category: "材料科学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_363",
    text: "下列排号中，最适合制造车床主轴的是 ( ) 。",
    options: ["T8", "Q195", "45", "..."],
    correctAnswerIndex: 2,
    category: "材料科学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_364",
    text: "选择制造锉刀 ( ) 的材料。",
    options: ["T8", "T10", "T12", "..."],
    correctAnswerIndex: 2,
    category: "材料科学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_365",
    text: "正火工件出炉后，可以堆积在 ( ) 空冷。",
    options: ["潮湿处", "干燥处", "阴冷处", "..."],
    correctAnswerIndex: 1,
    category: "热处理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_366",
    text: "完全退火不适用于( )。",
    options: ["低碳钢", "中碳钢", "高碳钢", "..."],
    correctAnswerIndex: 2,
    category: "热处理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_367",
    text: "45 钢的正常淬火组织应为( )。",
    options: ["马氏体", "马氏体+铁素体", "马氏体 +渗碳体", "..."],
    correctAnswerIndex: 0,
    category: "热处理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_368",
    text: "钢在加热时，判断过烧现象的依据是( )。",
    options: ["表面氧化", "奥氏体晶界发生氧化或熔化", "奥氏体晶粒粗大", "..."],
    correctAnswerIndex: 1,
    category: "热处理",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_369",
    text: "顺序阀的主要作用是( ) 。",
    options: ["定压...", "背压...", "降低...", "利用压力变化以控制油路的接通或切断"],
    correctAnswerIndex: 3,
    category: "液压传动",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_370",
    text: "在气体状态变化的( )过程中，系统靠消耗自身的内能对外做功。",
    options: ["等容过程", "等压过程", "等温过程", "绝热过程"],
    correctAnswerIndex: 3,
    category: "热力学",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_371",
    text: "气动仪表中，( )将检测气信号转换为标准气信号。",
    options: ["变送器", "比值器", "调节器", "转换器"],
    correctAnswerIndex: 0,
    category: "气动技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_372",
    text: "为了防止机器或部件内部的液体或气体向外渗漏...必须采用( )装置。",
    options: ["密封", "防松", "紧固", "压紧"],
    correctAnswerIndex: 0,
    category: "机械密封",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_373",
    text: "下列四个形位公差特征项目中公差带只有一种同形状的项目为( )。",
    options: ["直线度", "平行度", "垂直度", "同轴度"],
    correctAnswerIndex: 3,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_374",
    text: "形状误差的评定准则应当符合( )。",
    options: ["公差原则", "包容原则", "最小条件", "相关原则"],
    correctAnswerIndex: 2,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_375",
    text: "在同一要素上，下列关系正确的是( )。",
    options: ["形状公差大于位置公差", "形状公差小于位置公差", "形状公差大于尺寸公差", "..."],
    correctAnswerIndex: 1,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_376",
    text: "圆柱度公差可以同时控制( )。",
    options: ["圆度和素线直线度", "素线直线度和同轴度", "圆度和同轴度", "..."],
    correctAnswerIndex: 0,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_377",
    text: "径向全跳动不能控制的公差项目为( )。",
    options: ["圆柱度", "轴线同轴度", "素线直线度", "面对线的垂直度"],
    correctAnswerIndex: 3,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_378",
    text: "可逆要求应用于最大实体要求时，被测要素应遵守( )。",
    options: ["最大实体边界", "最小实体边界", "最大实体实效边界", "最小实体实效边界"],
    correctAnswerIndex: 2,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_379",
    text: "拧紧长方形布置的成组螺母时，应从( )。",
    options: ["对角顶点开始", "中间开始", "任意位置开始", "两边向中间"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_380",
    text: "用热油加热零件安装属于( )。",
    options: ["压入配合法", "冷缩配合法", "热胀配合法", "强力装配法"],
    correctAnswerIndex: 2,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_381",
    text: "一个 30mm的孔在同一个钻床上经钻削、扩削和铰削( )加工而成。",
    options: ["三个工序", "三个工步", "三次进给", "三次加工"],
    correctAnswerIndex: 1,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_382",
    text: "标准群钻的形状特点是三尖七刃( )。",
    options: ["两槽", "三槽", "四槽", "五槽"],
    correctAnswerIndex: 0,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_383",
    text: "用测力扳手使( )达到给定值的方法是控制扭矩法。",
    options: ["张紧力", "压力", "预紧力", "力"],
    correctAnswerIndex: 2,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_384",
    text: "千分尺的制造精度主要是由它的( )来决定的。",
    options: ["刻线精度", "测微螺杆精度", "微分筒精度", "固定套筒精度"],
    correctAnswerIndex: 1,
    category: "测量技术",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_385",
    text: "对于标准麻花钻而言，在主截面内( )与基面之间的夹角称为前角。",
    options: ["后刀面", "前刀面", "副后刀面", "切削平面"],
    correctAnswerIndex: 1,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_386",
    text: "丝锥的构造由( )组成。",
    options: ["切削部分和柄部", "切削部分和校准部分", "工作部分和校准部分", "工作部分和柄部"],
    correctAnswerIndex: 3,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_387",
    text: "一般手锯的往复长度不应小于锯条长度的( )。",
    options: ["1/3", "2/3", "1/2", "3/4"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_388",
    text: "锯条在制造时，使锯齿按一定的规律左右错开，排列成一定形状，称为( )。",
    options: ["锯齿的切削角度", "锯路", "锯齿的粗细", "锯割"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_389",
    text: "外圆柱工件在套筒孔中的定位，当选用较短的定位心轴时，可限制( )自由度。",
    options: ["两个移动", "两个转动", "两个移动和两个转动", "一个移动一个转动"],
    correctAnswerIndex: 0,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_390",
    text: "松键装配在键长方向、键与( )的间隙是0.1mm。",
    options: ["轴槽", "槽底", "轮毂", "轴和毂槽"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_391",
    text: "把蜗轮轴装入箱体后，蜗杆轴位置已由箱体孔决定，要使蜗杆轴线位于蜗轮轮齿对称中心面内，只能通过( )方法来调整。",
    options: ["改变箱体孔中心线位置", "改变蜗轮调整垫片厚度", "只能报废", "..."],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_392",
    text: "如果把影响某一装配精度的有关尺寸彼此按顺序地连接起来，可以构成一个封闭外形，这些相互关联尺寸的总称叫( )。",
    options: ["装配尺寸链", "封闭环", "组成环", "增环"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_393",
    text: "錾削铜、铝等软材料时，楔角取( )。",
    options: ["30°～50°", "50°～60°", "60°～70°", "70°～90°"],
    correctAnswerIndex: 0,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_394",
    text: "长方体工件定位，在( )上方分布一个支承点。",
    options: ["止推基准面", "导向基准面", "主要定位基准面", "大平面"],
    correctAnswerIndex: 0,
    category: "工装夹具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_395",
    text: "交叉锉锉刀运动方向与工件夹持方向约成( )角。",
    options: ["10°～20°", "20°～30°", "30°～40°", "40°～50°"],
    correctAnswerIndex: 3,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_396",
    text: "钻头直径大于13mm时，柄部一般做成( )。",
    options: ["直柄", "莫氏锥柄", "方柄", "直柄锥柄都有"],
    correctAnswerIndex: 1,
    category: "材料与刀具",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_397",
    text: "M3以上的圆板牙尺寸可调节，其调节范围是( )。",
    options: ["0.1～0.5mm", "0.6～0.9mm", "1～1.5mm", "2～1.5mm"],
    correctAnswerIndex: 0,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_398",
    text: "尺寸链中封闭环公差等于( )。",
    options: ["增环公差", "减环公差", "各组成环公差之和", "增环公差与减环公差之差"],
    correctAnswerIndex: 2,
    category: "公差配合",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_399",
    text: "凡是将两个以上的零件结合在一起或将零件与几个组件结合在一起，成为一个装配单元的装配工作叫( )。",
    options: ["部件装配", "总装配", "零件装配", "间隙调整"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_400",
    text: "平锉、方锉、圆锉、半圆锉和三角锉属于( )类锉刀。",
    options: ["特种锉", "什锦锉", "普通锉", "整形锉"],
    correctAnswerIndex: 2,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_401",
    text: "狭窄平面研磨时，用金属块做“导靠”采用( )研磨轨迹。",
    options: ["8字形", "螺旋形", "直线形", "圆形"],
    correctAnswerIndex: 2,
    category: "机械加工",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_402",
    text: "划线时，划针向划线方向倾斜( )。",
    options: ["0°", "25°～35°", "15°～20°", "45°～75°"],
    correctAnswerIndex: 3,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_403",
    text: "在螺栓连接中，有时在一个螺栓上采用双螺母，其目的是( )。",
    options: ["提高强度", "提高刚度", "防松", "减小每圈螺纹牙上的受力"],
    correctAnswerIndex: 2,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_404",
    text: "扁錾正握，其头部伸出约( )mm。",
    options: ["5", "10", "20", "30"],
    correctAnswerIndex: 2,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_405",
    text: "锉削速度一般为每分钟( )左右为宜。",
    options: ["20～30次", "30～60次", "10～15次", "60～80次"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_406",
    text: "在套丝过程中，材料受( )作用而变形,使牙顶变高。",
    options: ["弯曲", "挤压", "剪切", "扭转"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_407",
    text: "圆锥面的过盈连接要求配合的接触面积达到( )以上，才能保证配合的稳固性。",
    options: ["60%", "75%", "90%", "100%"],
    correctAnswerIndex: 1,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_408",
    text: "用于最后修光工件表面的锉是( )。",
    options: ["油光锉", "粗锉刀", "细锉刀", "什锦锉"],
    correctAnswerIndex: 0,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_409",
    text: "当金属薄板发生对角翘曲变形时，其矫平方法是沿( )锤击。",
    options: ["翘曲的对角线", "没有翘曲的对角线", "周边", "四周向中间"],
    correctAnswerIndex: 1,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_410",
    text: "利用( )可在工件上划出圆的等分线或不等分线。",
    options: ["分度头", "划针", "划规", "高度游标尺"],
    correctAnswerIndex: 0,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_411",
    text: "由一个或一组工人在不更换设备或地点的情况下完成的装配工作叫( )。",
    options: ["装配工序", "工步", "部件装配", "总装配"],
    correctAnswerIndex: 0,
    category: "机械装配",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_412",
    text: "钻上缠绕铁屑时，应及时停车，用( )清除。",
    options: ["手", "工件", "钩子", "嘴吹"],
    correctAnswerIndex: 2,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_413",
    text: "( )是用来加工零件上特殊表面用的。",
    options: ["平锉", "三角锉", "方锉", "异形锉"],
    correctAnswerIndex: 3,
    category: "钳工工艺",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_414",
    text: "夏季应当采用粘度( )的油液。",
    options: ["较低", "较高", "中等", "不作规定"],
    correctAnswerIndex: 1,
    category: "机械保养",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_415",
    text: "钳工车间设备较少工件摆放时，要( )。",
    options: ["堆放", "大压小", "重压轻", "放在工件架上"],
    correctAnswerIndex: 3,
    category: "安全生产",
    created: FIXED_TIMESTAMP
  },
  // --- Batch 6 (451-550) ---
  {
    id: "static_451",
    text: "车床尾座套的拆装、清洗应由维修工人完成。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_452",
    text: "一切单位和个人都有保护环境的责任与义务。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_453",
    text: "錾削时眼睛的视线要对着锤头。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_454",
    text: "《劳动合同法》没有直接对劳动合同的概念直接进行界定。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_455",
    text: "锯削的工件完成后，可用千分尺来检测该工件的垂直度。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_456",
    text: "选定合适的定位元件可以保证工件定位稳定和定位误差最小。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_457",
    text: "夹紧机构要有自锁机构。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_458",
    text: "大型工件划线时，如果没有长的钢直尺，可用拉线代替，没有大的直角尺则可用线坠代替。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_459",
    text: "划线时，都应从划线基准开始。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_460",
    text: "錾子的切削部分由前刀面、后刀面和它们的交线（切削刃）组成。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_461",
    text: "錾削时，一般应使后角在5°8°之间。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_462",
    text: "普通锉刀按断面形状可分为粗、中、细三种。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_463",
    text: "选择锉刀尺寸规格，取决于加工余量的大小。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_464",
    text: "研磨液在研磨中起调合磨料，冷却和润滑的作用。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_465",
    text: "装配就是将零件结合成部件，再将部件结合成机器的过程。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_466",
    text: "完全互换装配法、选择装配法、修配装配法和调整装配法是产品装配常用方法。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_467",
    text: "立钻Z525 主轴转速为0.10.81mm/r 分9级。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_468",
    text: "销连接在机械中除起到连接作用外还起定位作用和保险作用。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_469",
    text: "圆柱销一般靠过盈固定在轴上，用以定位和连接。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_470",
    text: "销连接有圆柱销连接和圆锥销连接两类。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_471",
    text: "过盈连接装配后，孔的直径被压缩，轴的直径被胀大。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_472",
    text: "磨擦力的调整方法是靠改变两带轮的中心距或用张紧轮张紧。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_473",
    text: "带轮相互位置不准确会引起带张紧，对中心距不大的测量方法是长直尺。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_474",
    text: "当带轮孔增大必须镶套，套与轴为螺纹连接套与带轮常用加骑缝螺钉方法固定。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_475",
    text: "带传动机构使用一段时间后三角带陷入槽底这是轴弯曲损坏形式造成的。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_476",
    text: "影响齿轮传动精度的因素包括齿轮加工精度、齿轮的精度等级，齿轮副的侧隙要求及齿轮副的接触斑点要求。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_477",
    text: "转速高的大齿轮装在轴上后应作平衡检查，以免工作时产生过大振动。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_478",
    text: "轮齿的接触斑点应用涂色法检查。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_479",
    text: "齿轮的跑合方式有电火花跑合和加载跑合两种。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_480",
    text: "机体组件是内燃机各机构、各系统工作和装配的基础，承受各种载荷。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_481",
    text: "内燃机燃料供给系统工作用的定时定定地向燃烧室内喷入不敷出燃油，并创造良好燃烧条件。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_482",
    text: "配气机构按照内燃机顺序定时地找开或关闭进排气门，使空气或可燃混合气进入气缸内和从气缸中排出废气。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_483",
    text: "拆卸时注意拆卸方法是设备修理工作重点之一。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_484",
    text: "修理工艺过程包括修理前的准备工作设备的拆卸零件的修理和更换及装配调整和试车。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_485",
    text: "液压系统产生故障之一爬行原因油泵不泵油。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_486",
    text: "液压系统油温过高不影响机床精度和正常工作。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_487",
    text: "螺旋传动机构是将螺旋运动变换为曲线运动。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_488",
    text: "轴向间隙直接影响丝杠螺母副的运动精度。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_489",
    text: "用检验棒校正丝杠螺母副平行度时，为消除检验棒在各支承孔中的安装误差，可将检验棒转过...后再测...。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_490",
    text: "钻床钻孔时，车未停稳不准捏停钻夹头。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_491",
    text: "钳工车间设备较少，工件要摆放在工件架上。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_492",
    text: "熔断器的作用是保护电路。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_493",
    text: "用接触器联锁来控制电动机的正反转。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_494",
    text: "工业企业在计划期内生产的符合质量的工业产品实物量叫产品产量。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_495",
    text: "表示机器或部件在装配状态下的图样称为装配图。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_496",
    text: "标注形位公差代号时，应把形位公差数值及有关符号填写在形位公差框格左起第一格内。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_497",
    text: "当在表面粗糙度代号上标注轮廓算术平均偏差时，省略“Ra”符号。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_498",
    text: "零件图是生产零件的根据，因此图样上除图形和尺寸外，还必须注出生产过程的技术要求。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_499",
    text: "配合就是基本尺寸相同，相互结合的孔和轴的公差带之间的关系。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_500",
    text: "形状公差是形状误差的最大允许值，包括直线度、平面度、圆度、圆柱度、线轮廓度、面轮廓度6种。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_501",
    text: "机械传动是采用带轮、齿轮、轴等机械零件组成的传动装置来进行能量的传递。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_502",
    text: "带传动是依靠作为中间挠性件的带和带轮之间的摩擦力来传动的。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_503",
    text: "液压传动以油液作为工作质，依靠密封容积变化的机械能来传递动力。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_504",
    text: "液压缸在液压系统中属于动力部分。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_505",
    text: "用适当分布的六个定位承点，限制工件的六个自由度使工件在夹具中的位置完全确定即为六点定位原则。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_506",
    text: "选定合适的定位元件可以保证工件定位稳定和定位误差最小。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_507",
    text: "夹紧机构要有自锁机构。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_508",
    text: "钻床夹具有固定式，流动式，回转式，移动式和盖板式。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_509",
    text: "零件经渗碳后，表面即可得到很高的硬度及良好的耐磨性。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_510",
    text: "常用的退火方法有完全退火、球化退火和去应力退火等。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_511",
    text: "含碳量低于0.25%的钢，可用正火代替退火，以改善切削加工性。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_512",
    text: "钢回火的加热温度在A1线以下，因此，回火过程中无组织变化。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_513",
    text: "大型工件划线时，如果没有长的钢直尺，可用拉线代替，没有大的直角尺则可用线坠代替。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_514",
    text: "划线时，都应从划线基准开始。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_515",
    text: "利用分度头可在工件上划出圆的等分线或不等分线。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_516",
    text: "錾子的切削部分由前刀面、后刀面和它们的交线（切削刃）组成。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_517",
    text: "錾削时，一般应使后角在5°8°之间。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_518",
    text: "普通锉刀按断面形状可分为粗、中、细三种。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_519",
    text: "选择锉刀尺寸规格，取决于加工余量的大小。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_520",
    text: "锯路能减少锯缝两侧面对锯条的摩擦阻力，避免锯条被卡住或折断。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_521",
    text: "锯硬材料时，要选择粗齿锯条，以便提高工作效率。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_522",
    text: "锯割时，无论是远起锯，还是近起锯，起锯的角度都要大于15°。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_523",
    text: "钻头主切削刃上各点的基面是不同的。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_524",
    text: "薄板群钻的钻尖高度比两切削刃外缘刀尖低。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_525",
    text: "丝锥校准部分的大径，中径，小径均有(0.050.12)/100的倒锥。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_526",
    text: "攻丝前的底孔直径应稍大于螺纹小径。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_527",
    text: "过盈过接的配合面多为圆柱形也有圆锥形或其他形式的。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_528",
    text: "在带传中，不产生打滑的皮带是平带。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_529",
    text: "链传动的损坏形式有链被拉长链和链轮磨损及链断裂等。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_530",
    text: "蜗杆与蜗轮的轴心线相互间有平行关系。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_531",
    text: "蜗轮副正确的接触斑点位置应在蜗轮中部稍偏于蜗杆旋出方向。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_532",
    text: "凸缘式联轴器的装配技术要求在一般情况下要严格保证两轴的同轴度。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_533",
    text: "凸缘式联轴器在装配时，首先应在其上装平键。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_534",
    text: "联轴器的任务是传递扭矩，有时可作定位作用",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_535",
    text: "从业者从事职业的态度是价值观、道德观的具体表现",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_536",
    text: "从业者要遵守国家法纪，但不必遵守安全操作规程。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_537",
    text: "机器上所有零件都必须进行金属加工。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_538",
    text: "机械工程图样上，常用的长度单位是mm。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_539",
    text: "螺纹千分尺是用来测量螺纹大径的。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_540",
    text: "合理选择划线基准，是提高划线质量和效率的关键。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_541",
    text: "圆板牙由切削部分、校准部分和排屑孔组成，一端有切削锥角。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_542",
    text: "三角螺纹、方牙螺纹、锯齿螺纹都属于标准螺纹范围。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_543",
    text: "麻花钻主切削刃上，各点的前角大小是相等的。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_544",
    text: "一般直径在 5mm 以上的钻头，均需修磨横刃。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_545",
    text: "钻孔时，冷却润滑的目的应以润滑为主。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_546",
    text: "用丝锥在工件孔中切出内螺纹的加工方法称为套螺纹。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_547",
    text: "管螺纹公称直径是指螺纹大径。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_548",
    text: "零件毛坯的制造方法有锻造、铸造和焊接等。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_549",
    text: "划线时，都应从划线基准开始。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_550",
    text: "螺纹的完整标记由螺纹代号、螺纹公差带代号和旋合长度代号组成。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  // --- Batch 7 (551-668) ---
  {
    id: "static_551",
    text: "找正和借料这两项工作是各自分开进行的。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_552",
    text: "游标卡尺不能用来测量孔距。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_553",
    text: "装配工艺规程文件包括生产过程和装配过程所需的一些文件。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_554",
    text: "采用量块移动坐标钻孔的方法...应具有两个互相垂直的加工面作为基准。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_555",
    text: "只要在刮削中及时进行检验，就可避免刮削废品的产生。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_556",
    text: "CA6140车床床身导轨的精度由磨削来达到。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_557",
    text: "根据轴颈和轴承之间摩擦性质的不同，轴承可分为滑动轴承和滚动轴承两类",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_558",
    text: "为了使零件具有完全互换性，必须使各零件的几何尺寸完全一致。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_559",
    text: "零件的实际尺寸位于所给定的两个极限尺寸之间，则零件的该尺寸为合格。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_560",
    text: "相互配合的孔和轴，其基本尺寸必须相同。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_561",
    text: "某一零件的实际尺寸正好等于其基本尺寸，则该尺寸必然合格。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_562",
    text: "测量精度和测量误差是两个相对的概念，精度高，则误差小，反之精度低，则误差大。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_563",
    text: "由于随机误差产生的因素多具有偶然性和不稳定性，因而在较高精度的测量中，只能将此误差忽略不计。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_564",
    text: "使用相同精度的计量器具，采用直接测量法比采用间接测量法的精度高。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_565",
    text: "规定形位公差的目的是为了限制形状和位置误差，从而保证零件的使用性能。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_566",
    text: "采用形位公差的未注公差值，在图样和技术文件中不须作任何标注和说明。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_567",
    text: "圆跳动公差分为四种，划分的依据是被测要素的几何特征和检测方向。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_568",
    text: "与直线度公差和平面度公差之间的关系类似，线轮廓度公差带的形状要比面轮廓度公差带的一形状复杂。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_569",
    text: "对于某一确定的孔，其体外作用尺寸大于其实际尺寸；对于某一确定的轴，其体外作用尺寸小于其实际尺寸。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_570",
    text: "可逆要求应用于最大实体要求时，可逆要求允许中心要素的形位误差值增大，反过来可以补偿尺寸公差。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_571",
    text: "提高零件沟槽和台阶圆角处的表面质量，可以增加零件的抗疲劳强度。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_572",
    text: "光滑极限量规须成对使用，只有在通规通过工件的同时止规又不通过工件，才能判断工件是合格的。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_573",
    text: "构件是加工制造的单元，零件是运动的单元。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_574",
    text: "不锈钢 2Cr13 具有导磁性。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_575",
    text: "按用途不同螺旋传动可分为传动螺旋调整螺旋两种类型。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_576",
    text: "刀具材料的基本要求是具有良好的工艺性和耐磨性两项。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_577",
    text: "碳素工具钢和合金工具钢的特点是耐热性好，但抗弯强度高，价格便宜等。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_578",
    text: "硬质合金机用铰刀用来高速铰削和铰削硬材料。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_579",
    text: "普通螺纹分粗牙普通螺纹和细牙普通螺纹两种。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_580",
    text: "蜗杆传动的承载能力大，传动效率高。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_581",
    text: "辅助装置，是液压系统的基本组成部分之一。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_582",
    text: "根据轴颈和轴承之间摩擦性质的不同，轴承可分为滑动轴承和滚动轴承两类。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_583",
    text: "抗拉强度最高的球墨铸铁其伸长率也最大。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_584",
    text: "正火不能细化晶粒或均匀组织。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_585",
    text: "平带传动主要用于两轴垂直的较远距离的传动。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_586",
    text: "按齿轮形状不同可将齿轮传动分为直齿轮传动和圆锥齿轮传动两类。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_587",
    text: "螺旋传动主要由螺杆、螺母和螺栓组成。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_588",
    text: "碳素工具钢和合金工具钢的特点是耐热性好，但抗弯强度高，价格便宜等。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_589",
    text: "千分尺可以测量正在旋转的工件。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_590",
    text: "百分表的示值范围通常有:03mm ，05mm ，0~10mm 三种。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_591",
    text: "CAD 系统仅用于绘制工程图纸，其主要内容为计算机图形学。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_592",
    text: "CAD 系统可以使人与计算机取长补短，发挥各自特性，达到最佳合作效果。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_593",
    text: "实现自动绘图只是 CAD 系统的功能之一。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_594",
    text: "建立 CAD 系统时，有时软件系统所需费用要大于硬件系统。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_595",
    text: "CAD 系统中，实体建模的方法只有构造实体几何表示法及边界表示法两种。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_596",
    text: "液压传动系统中，压力的大小取决于油液流量的大小。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_597",
    text: "减压阀主要用于降低系统某一支路的油液压力，它能使阀的出口压力基本不变。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_598",
    text: "温度对油液粘度影响是：当油液温度升高时,其粘度随着升高。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_599",
    text: "零件图的作用是制造和检验零件的依据。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_600",
    text: "在同一图样上，每一表面一般只注一次表面结构代号。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_601",
    text: "在装配图中两个零件的非接触面画一条轮廓线。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_602",
    text: "在各个剖视图中，同一零件的剖面线方向与间隔必须一致。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_603",
    text: "装配图中编写序号的指引线相互可以相交。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_604",
    text: "开始攻丝时，应先用二锥起攻，然后用头锥整形。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_605",
    text: "钻头套可用在立钻钻床上。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_606",
    text: "普通钻床，根据其结构和适用范围不同可分为台钻、立钻和摇臂钻三种。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_607",
    text: "在台钻上适宜进行锪孔、铰孔和攻螺纹等加工。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_608",
    text: "砂轮机新装砂轮片后可直接开机使用。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_609",
    text: "好的装配工艺结构，应保证装配体在工作时不松动、润滑油不泄漏及便于装卸等。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_610",
    text: "普通螺纹用于连接，梯形螺纹用于传动。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_611",
    text: "装配尺寸链中，封闭环属于装配精度。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_612",
    text: "封闭环公差等于各组成环公差之和。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_613",
    text: "工艺尺寸链中，同封闭环尺寸同增同减的是减环。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_614",
    text: "工件在V形块上定位，尽管V形块的对中性好，但由于一批工件的直径是变化的，所以在加工中仍存在定位误差。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_615",
    text: "钻小孔时应选择较大的进给量和较低的转速。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_616",
    text: "标准麻花钻横刃较长，在钻孔时定心性好。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_617",
    text: "群钻主切削刃分成几段的作用是利用分屑、断屑和排屑。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_618",
    text: "划线盘上划针的直头用来找正，弯头用来划线。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_619",
    text: "游标高度尺作为精密划线工具，不得用于粗糙毛坯表面的划线。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_620",
    text: "样冲眼的深浅视工件表面粗糙度程度而定，精加工表面应打浅一些。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_621",
    text: "滴点指润滑脂在测定器中受热后，滴下最后一滴时的温度。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_622",
    text: "铰刀的基本尺寸与孔的基本尺寸相同。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_623",
    text: "选择锉刀尺寸规格，取决于加工余量的大小。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_624",
    text: "修理工艺过程包括修理前的准备工作、设备的拆卸、零件的修理和更换及装配调整和试车。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_625",
    text: "大型工件划线时，如果没有长的钢直尺，可用拉线代替，没有大的直角尺则可用线坠代替。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_626",
    text: "划线时已确定零件各部位尺寸、几何形状及相应位置的依据称为设计基准。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_627",
    text: "工件一般应夹在台虎钳的左面，以便操作。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_628",
    text: "带张紧力的调整方法是靠改变两带轮的中心距或用张紧轮张紧。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_629",
    text: "轴承在拆卸过程中应以“轴承不拆散”为原则。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_630",
    text: "锉配键是键磨损后常采取的修理办法。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_631",
    text: "当过盈量及配合尺寸较小时，常采用温差法装配。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_632",
    text: "滚动轴承的游隙越小越好。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_633",
    text: "套杯多出现在锥齿轮轴上，以调整锥齿轮的轴向位置。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_634",
    text: "在加工工序中用作工件定位的基准称为工序基准。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_635",
    text: "直接找正装夹可以获得较高的找正精度。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_636",
    text: "划线找正装夹多用于铸件的精加工工序。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_637",
    text: "夹具装夹广泛应用于各种生产类型。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_638",
    text: "欠定位就是绝对不允许的。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_639",
    text: "过定位是指工件实际被限制得自由度数多于工件加工所必须限制得自由度数。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_640",
    text: "定位误差就是由于夹具定位元件制造不准确所造成的加工误差。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_641",
    text: "正交平面就是垂直于主切削刃的平面。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_642",
    text: "成批生产中，常用塞规、卡规等专用量具来检验工件合格与否。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_643",
    text: "低碳钢在进行拉伸试验时历经弹性阶段、屈服阶段以及颈缩阶段三个阶段。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_644",
    text: "对于平面磨床,床身导轨在垂直面的直线度要求应该高于水平平面内的直线度要求。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_645",
    text: "淬火的目的是提高钢的硬度降低钢的强度。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_646",
    text: "刀具前角就是前刀面与基面的夹角,在正交平面中测量。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_647",
    text: "刀具主偏角就是主切削平面与假定工作平面间的夹角 (即主切削刃在基面的投影与进给方向的夹角)。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_648",
    text: "高速钢并不是现代最好的刀具材料,虽然它的韧性比硬质合金高。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_649",
    text: "硬质合金受制造方法的限制，目前主要用于制造形状比较简单的切削刀具。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_650",
    text: "金刚石刀具不宜加工钛系金属,主要用于精加工有色金属。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_651",
    text: "磨具粒度的选择主要取决于工件的精度、表面粗糙度与生产率等。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_652",
    text: "磨具的组织表示磨具中材料、结合剂与气孔三者之间不同体积的比例关系。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_653",
    text: "加工丝杠时常采用弹性或液压尾顶尖，是为了避免工件受热伸长而产生弯曲变形。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_654",
    text: "生产任务紧的时候放松文明生产的要求是允许的。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_655",
    text: "文明生产要求现场杜绝一切跑冒滴漏。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_656",
    text: "将放射性废物随意丢弃在工作现场属于一般违章。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_657",
    text: "设备管理中不能将设备维修、更新、改造相结合。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_658",
    text: "在生产中，由于机器转动、气体排放、工件撞击于摩擦所产生的噪声，称为生产性噪声。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_659",
    text: "检修作业现场不用设置有效标志、隔离带、防护网，现场专人监护即可。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_660",
    text: "锤子可以当垫铁使用，打锤时不准戴手套，并要注意周围是否有人或障碍物。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_661",
    text: "检查设备内部，用任何照明物都可以，没有什么限制。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_662",
    text: "拆卸下的设备零、部件要放稳垫牢。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_663",
    text: "装配的工作要点是：喷涂、涂油、装管。",
    options: ["正确", "错误"],
    correctAnswerIndex: 1,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_664",
    text: "每天的维护工作属于经常性维护工作。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_665",
    text: "环保责任有：遵守环保规定、降低能源消耗。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_666",
    text: "安全职责包括遵守安全规定、维护设备和安全操作。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_667",
    text: "所有机修人员必须遵守“一般钳工”安全操作规程。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  },
  {
    id: "static_668",
    text: "钳工操作时，其他人不得从后、前面靠近钳工操作者，要随时进行必要的呼唤应答。",
    options: ["正确", "错误"],
    correctAnswerIndex: 0,
    category: "判断题",
    created: FIXED_TIMESTAMP
  }
];