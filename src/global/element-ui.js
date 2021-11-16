import {
  Aside,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Header,
  Input,
  Main,
  Menu,
  MenuItem,
  Row,
  Submenu,
} from 'element-ui'

const elems = [
  Button,
  Form,
  Card,
  FormItem,
  Row,
  Col,
  Input,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
]
export default function registerElement(Vue) {
  elems.forEach((elem) => {
    Vue.use(elem)
  })
}
