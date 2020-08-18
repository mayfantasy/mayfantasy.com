export interface INavItem {
  name: string
  key: string
  url: string
  children?: INavItem[]
}
