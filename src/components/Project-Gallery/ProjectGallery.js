import React from 'react'
import './ProjectGallery.css';
import Project from '../Project/Project.js'
import '../Styles/Media-Queries.css';
import '../Styles/Shared-Styles.css';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function ProjectGallery() {
  return (
    <Grid2 container spacing={3}>
<Project />
    </Grid2>
  )
}
