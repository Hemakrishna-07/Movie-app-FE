import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className='counter-container'>
      <IconButton
        onClick={() => setLike(like + 1)}
        aria-label="Like"
        color='primary'
      >
        <Badge badgeContent={like} color="primary">
          <ThumbUpOffAltIcon />
        </Badge>
      </IconButton>
      <IconButton
        onClick={() => setDisLike(disLike + 1)}
        aria-label="Like"
        color='error'
      >
        <Badge badgeContent={disLike} color="error">
          <ThumbDownOffAltIcon />
        </Badge>
      </IconButton>
    </div>
  );
}
