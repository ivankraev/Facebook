import { FC } from 'react'
import { Link } from 'react-router-dom'

import ListItem, { IListItemProps } from '../ListItem/ListItem'

interface IListItemLinkProps extends IListItemProps {
  link: string
}

const ListItemLink: FC<IListItemLinkProps> = ({ link, ...rest }) => {
  return (
    <Link to={link}>
      <ListItem {...rest} />
    </Link>
  )
}

export default ListItemLink
