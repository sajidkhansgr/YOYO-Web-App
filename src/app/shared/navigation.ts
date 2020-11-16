export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'group' | 'collapsable';
  icon?: string;
  url?: string;
  children?: NavigationItem[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

export const navigation: Navigation[] = [
  {
    id: 'dash',
    title: 'Dashboard',
    type: 'item',
    icon: 'fa-th-large',
    url: '/dashboard'
  },
  {
    id: 'chat',
    title: 'Chat',
    type: 'item',
    icon: 'fa-th-large',
    url: '/chat'
  },
  {
    id: 'hub',
    title: 'Hub',
    type: 'collapsable',
    icon: 'fa-layer-group',
    children: []
  },
  {
    id: 'usr',
    title: 'Users',
    type: 'item',
    icon: 'fa-user',
    url: '/user'
  },
  {
    id: 'commn',
    title: 'Communication',
    type: 'item',
    icon: 'fa-envelope',
    url: '/communication'
  },
  {
    id: 'report',
    title: 'Reports',
    type: 'item',
    icon: 'fa-signal',
    url: '/reports'
  }
];
