import { Checkroom, Code, DeveloperMode, FaceRetouchingNatural, FitnessCenter, GraphicEq, Home, LiveTv, MusicNote, OndemandVideo, School, SportsEsports, TheaterComedy } from '@mui/icons-material';
import { Stack } from '@mui/material'
import React from 'react'

export const categories = [
  { name: 'New', icon: <Home />, },
  { name: 'Coding', icon: <Code />, },
  { name: 'Music', icon: <MusicNote /> },
  { name: 'Education', icon: <School />, },
  { name: 'Podcast', icon: <GraphicEq />, },
  { name: 'Movie', icon: <OndemandVideo />, },
  { name: 'Gaming', icon: <SportsEsports />, },
  { name: 'Live', icon: <LiveTv />, },
  { name: 'Sport', icon: <FitnessCenter />, },
  { name: 'Fashion', icon: <Checkroom />, },
  { name: 'Beauty', icon: <FaceRetouchingNatural />, },
  { name: 'Comedy', icon: <TheaterComedy />, },
  { name: 'Crypto', icon: <DeveloperMode />, },
];

const selectedCategory = 'New';

const SideBar = () => {
  return (
    <Stack
        direction="row"
        sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        }}
    >
        {categories.map((category) => (
          <button
            className='category-btn'
            style={{
              backgroundColor: category.name === selectedCategory && '#FC1503', color: 'white'
            }}
            key={category.name}
          >
            <span
              style={{color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}
            >{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
    </Stack>
  )
}

export default SideBar