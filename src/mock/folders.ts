export interface Folder {
    id: number;
    name: string;
    children: Folder[];
}
  
export const mockFolders: Folder[] = [
  {
    id: 1,
    name: 'assets',
    children: [
      { id: 2, 
        name: 'icons', 
        children: [
          {
            id: 3,
            name: 'up.svg',
            children: []
          },
          {
            id: 4,
            name: 'down.svg',
            children: []
          }
        ] },
    ],
  },
  {
    id: 5,
    name: 'components',
    children: [
      { id: 6, 
        name: 'FolderTree.vue', 
        children: [] 
      },
      { id: 7, 
        name: 'Modal.vue', 
        children: [] 
      }
    ],
  },
  {
    id: 8,
    name: 'fakeApi',
    children: [
      { id: 9, 
        name: 'folders.ts', 
        children: [] 
      }
    ],
  },
  {
    id: 10,
    name: 'mock',
    children: [
      { id: 9, 
        name: 'folders.ts', 
        children: [] 
      }
    ],
  },
  { 
    id: 11, 
    name: 'App.vue', 
    children: [] 
  },
  { 
    id: 12, 
    name: 'main.ts', 
    children: [] 
  },
  { 
    id: 13, 
    name: 'style.css', 
    children: [] 
  },
  { 
    id: 14, 
    name: 'хочу водопад!', 
    children: [
      { 
        id: 15, 
        name: '1', 
        children: [
          { 
            id: 16, 
            name: '2', 
            children: [
              { 
                id: 17, 
                name: '3', 
                children: [
                  { 
                    id: 18, 
                    name: '4', 
                    children: [
                      { 
                        id: 19, 
                        name: '5', 
                        children: [
                          { 
                            id: 20, 
                            name: '6', 
                            children: [
                              { 
                                id: 21, 
                                name: 'приплыли!', 
                                children: [] 
                              }
                            ] 
                          },
                        ] 
                      },
                    ] 
                  },
                ] 
              },
            ] 
          }
        ] 
      }
    ] 
  },
];
  