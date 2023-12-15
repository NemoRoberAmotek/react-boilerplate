import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import {
  Container,
  MenuItem,
  Menu,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar
} from '@mui/material'
import NavLink from './NavLink'
import { useState } from 'react'

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar disableGutters>
          <NavLink to='/'>
            <Typography color={'white'} variant='h4'>
              Dogs App
            </Typography>
          </NavLink>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'end'
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              <MenuItem>
                <NavLink to='/'>Home</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to='/breeds'>Breeds</NavLink>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'end',
              alignItems: 'center',
              gap: 3
            }}
          >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/breeds'>Breeds</NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation
