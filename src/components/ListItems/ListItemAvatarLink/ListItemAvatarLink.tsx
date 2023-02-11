import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import ListItemAvatar, { IListItemAvatarProps } from '../ListItemAvatar/ListItemAvatar'

interface IListItemAvatarLinkProps extends IListItemAvatarProps {
  link: string
}

const ListItemAvatarLink: FC<IListItemAvatarLinkProps> = ({ link, ...props }) => {
  return (
    <Link to={link}>
      <ListItemAvatar {...props} />
    </Link>
  )
}

export default ListItemAvatarLink
