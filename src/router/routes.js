import "nprogress/nprogress.css";
import NotFound from "@/views/NotFound.vue";
import { start, done, configure } from "nprogress";

configure({
  trickleSpeed: 20,
  showSpinner: false,
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(2000);
    }
    const comp = await pageCompResolver();
    done();
    return comp;
  };
}

export default [
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "home" */ "@/views/Home")
    ),
    meta: {
      title: "Home",
    },
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "about" */ "@/views/About")
    ),
    meta: {
      title: "About Me",
    },
  },
  {
    name: "Blog",
    path: "/article",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blog" */ "@/views/Blog")
    ),
    meta: {
      title: "Blog",
    },
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blog" */ "@/views/Blog")
    ),
    meta: {
      title: "Article",
    },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blogdetail" */ "@/views/Blog/Detail")
    ),
    meta: {
      title: "BlogDetail",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "project" */ "@/views/Project")
    ),
    meta: {
      title: "Project",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "message" */ "@/views/Message")
    ),
    meta: {
      title: "Message",
    },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  },
];
