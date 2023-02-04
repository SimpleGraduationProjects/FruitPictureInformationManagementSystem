import store from "@/store";

export default [
    {
        path: "admins",
        name: "AdminadminsList",
        component: () => import("@/views/admins/list"),
        meta: { title: "管理员列表", authLogin: true },
    },
    {
        path: "adminsadd",
        name: "AdminadminsAdd",
        component: () => import("@/views/admins/add"),
        meta: { title: "添加管理员", authLogin: true },
    },
    {
        path: "adminsupdt",
        name: "AdminadminsUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/admins/updt"),
        meta: { title: "编辑管理员", authLogin: true },
    },
    {
        path: "adminsupdtself",
        name: "AdminadminsUpdtSelf",
        props: (route) => ({ id: store.state.user.session.id }),
        component: () => import("@/views/admins/updt"),
        meta: { title: "编辑管理员", authLogin: true },
    },
    {
        path: "yonghu",
        name: "AdminyonghuList",
        component: () => import("@/views/yonghu/list"),
        meta: { title: "用户列表", authLogin: true },
    },
    {
        path: "yonghuadd",
        name: "AdminyonghuAdd",
        component: () => import("@/views/yonghu/add"),
        meta: { title: "添加用户", authLogin: true },
    },
    {
        path: "yonghuupdt",
        name: "AdminyonghuUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/yonghu/updt"),
        meta: { title: "编辑用户", authLogin: true },
    },
    {
        path: "yonghuupdtself",
        name: "AdminyonghuUpdtSelf",
        props: (route) => ({ id: store.state.user.session.id }),
        component: () => import("@/views/yonghu/updt"),
        meta: { title: "编辑用户", authLogin: true },
    },
    {
        path: "yonghudetail",
        props: (route) => ({ id: route.query.id }),
        name: "AdminyonghuDetail",
        component: () => import("@/views/yonghu/detail"),
        meta: { title: "用户详情", authLogin: true },
    },
    {
        path: "liuyanban",
        name: "AdminliuyanbanList",
        component: () => import("@/views/liuyanban/list"),
        meta: { title: "留言板列表", authLogin: true },
    },
    {
        path: "liuyanban_liuyanren",
        name: "AdminliuyanbanListliuyanren",
        component: () => import("@/views/liuyanban/list-liuyanren"),
        meta: { title: "留言板列表", authLogin: true },
    },
    {
        path: "liuyanbanadd",
        name: "AdminliuyanbanAdd",
        component: () => import("@/views/liuyanban/add"),
        meta: { title: "添加留言板", authLogin: true },
    },
    {
        path: "liuyanbanupdt",
        name: "AdminliuyanbanUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/liuyanban/updt"),
        meta: { title: "编辑留言板", authLogin: true },
    },
    {
        path: "lunbotu",
        name: "AdminlunbotuList",
        component: () => import("@/views/lunbotu/list"),
        meta: { title: "轮播图列表", authLogin: true },
    },
    {
        path: "lunbotuadd",
        name: "AdminlunbotuAdd",
        component: () => import("@/views/lunbotu/add"),
        meta: { title: "添加轮播图", authLogin: true },
    },
    {
        path: "lunbotuupdt",
        name: "AdminlunbotuUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/lunbotu/updt"),
        meta: { title: "编辑轮播图", authLogin: true },
    },
    {
        path: "pinglun",
        name: "AdminpinglunList",
        component: () => import("@/views/pinglun/list"),
        meta: { title: "评论列表", authLogin: true },
    },
    {
        path: "pinglun_pinglunren",
        name: "AdminpinglunListpinglunren",
        component: () => import("@/views/pinglun/list-pinglunren"),
        meta: { title: "评论列表", authLogin: true },
    },
    {
        path: "pinglunupdt",
        name: "AdminpinglunUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/pinglun/updt"),
        meta: { title: "编辑评论", authLogin: true },
    },
    {
        path: "shuiguotupian",
        name: "AdminshuiguotupianList",
        component: () => import("@/views/shuiguotupian/list"),
        meta: { title: "水果图片列表", authLogin: true },
    },
    {
        path: "shuiguotupian_faburen",
        name: "AdminshuiguotupianListfaburen",
        component: () => import("@/views/shuiguotupian/list-faburen"),
        meta: { title: "水果图片列表", authLogin: true },
    },
    {
        path: "shuiguotupianadd",
        name: "AdminshuiguotupianAdd",
        component: () => import("@/views/shuiguotupian/add"),
        meta: { title: "添加水果图片", authLogin: true },
    },
    {
        path: "shuiguotupianupdt",
        name: "AdminshuiguotupianUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/shuiguotupian/updt"),
        meta: { title: "编辑水果图片", authLogin: true },
    },
    {
        path: "shuiguotupiandetail",
        props: (route) => ({ id: route.query.id }),
        name: "AdminshuiguotupianDetail",
        component: () => import("@/views/shuiguotupian/detail"),
        meta: { title: "水果图片详情", authLogin: true },
    },
];