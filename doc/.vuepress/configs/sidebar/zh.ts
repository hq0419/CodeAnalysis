import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '介绍',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/快速入门/快速启动一次代码分析.md'
      ],
    },
    {
      text: '团队管理相关',
      children: [
        '/zh/guide/团队管理/团队管理.md',
        '/zh/guide/团队管理/成员权限.md',
      ]
    },
    {
      text: '代码检查',
      children: [
        '/zh/guide/代码检查/分析结果查看.md',
      ]
    },
    {
      text: '分析方案 & 模板',
      children: [
        '/zh/guide/分析方案/基础属性配置.md',
        '/zh/guide/分析方案/代码检查配置.md',
        '/zh/guide/分析方案/代码检查规则配置.md',
        '/zh/guide/分析方案/代码检查编译配置.md',
        '/zh/guide/分析方案/代码度量配置.md',
        '/zh/guide/分析方案/过滤配置.md',
        '/zh/guide/分析方案/分析方案模板说明.md',
      ]
    },
    {
      text: '工具管理',
      children: [
        '/zh/guide/工具管理/工具管理说明.md',
        '/zh/guide/工具管理/自定义规则.md',
        '/zh/guide/工具管理/自定义工具.md',
      ]
    },
    {
      text: '后台管理',
      children: [
        '/zh/guide/后台管理/后台管理说明.md',
      ]
    },
    {
      text: '客户端',
      children: [
        '/zh/guide/客户端/配置说明.md',
        '/zh/guide/客户端/本地分析.md',
        '/zh/guide/客户端/常驻节点分析.md',
      ]
    },
    {
      text: '服务端',
      children: [
        '/zh/guide/服务端/server.md',
        '/zh/guide/服务端/deploy_with_minio.md',
      ]
    },
    {
      text: 'Web端',
      children: [
        '/zh/guide/web/web.md',
        '/zh/guide/web/deploySource.md',
      ]
    },
  ],
  '/zh/advanced/': [
    {
      text: '深入',
      children: [
        '/zh/advanced/任务分布式执行.md',
        '/zh/advanced/集成代码分析工具.md',
      ],
    }
  ],
  '/zh/community/': [
    {
      text: '社区资源',
      children: [
        '/zh/community/contribute.md',
        '/zh/community/pr.md',
        '/zh/community/changelog.md',
        '/zh/community/joingroup.md',
      ]
    },
  ],
  '/zh/api/': [
    {
      text: 'API',
      children: [
        '/zh/api/README.md',
        '/zh/api/对象主要字段说明.md',
        '/zh/api/项目管理模块接口.md',
        '/zh/api/任务管理模块接口.md',
        '/zh/api/结果概览模块接口.md',
        '/zh/api/代码扫描数据模块接口.md',
        '/zh/api/代码度量数据模块接口.md',
      ]
    },
  ],
  '/zh/quickStarted/': [
    {
      text: '快速入门',
      children: [
        {
          text: '概述',
          link: '/zh/quickStarted/intro.md',
        },
        '/zh/quickStarted/deploySever.md',
        '/zh/quickStarted/initRepo.md',
        '/zh/quickStarted/deployClient.md',
        '/zh/quickStarted/runProject.md',
        '/zh/quickStarted/FAQ.md',
      ],
    },
    {
      text: '依赖安装参考',
      // collapsible: true,
      children: [
        '/zh/quickStarted/references/install_python37_on_centos.md',
        '/zh/quickStarted/references/install_python37_on_ubuntu.md',
        '/zh/quickStarted/references/install_mysql_on_centos.md',
        '/zh/quickStarted/references/install_nginx_from_source.md',
        '/zh/quickStarted/references/install_redis_from_source.md',
        '/zh/quickStarted/references/install_redis_on_centos.md',
      ],
    },
    {
      text: '其他',
      // collapsible: true,
      children: [
        '/zh/quickStarted/tools.md',
      ],
    },
  ],
}