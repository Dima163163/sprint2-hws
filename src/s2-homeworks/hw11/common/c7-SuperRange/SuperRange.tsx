import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#0c2',
                height: '4px',
                maxWidth: '143px',
                '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '1px solid #0c2',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:after': {
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#0c2',
                    },
                },
                '& .MuiSlider-rail': {
                    color: 'black'
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
