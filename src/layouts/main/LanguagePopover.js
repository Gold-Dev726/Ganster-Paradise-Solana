import { useRef, useState } from 'react';
// material
import { alpha } from '@mui/material/styles';
import { Box, IconButton, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
// hooks
import useLocales from 'hooks/useLocales';
// components
import MenuPopover from 'components/MenuPopover';

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { allLang, currentLang, onChangeLang } = useLocales();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeLang = (value) => {
    onChangeLang(value);
    handleClose();
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <img src={currentLang.icon} alt={currentLang.label} />
      </IconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ py: 1 }}>
        {allLang.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang.value}
            onClick={() => handleChangeLang(option.value)}
            sx={{ py: 1, px: 2.5 }}
          >
            <ListItemIcon>
              <Box component="img" alt={option.label} src={option.icon} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ variant: 'body2' }}>{option.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuPopover>
    </>
  );
}
