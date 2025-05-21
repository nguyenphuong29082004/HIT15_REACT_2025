import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../Main_week9/main_week9'
import "./Paragraph.scss"
function Paragraph() {
    const theme = useContext(ThemeContext)
  return (
    <div className={theme}>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptatem, 
            culpa expedita, enim dolorem explicabo nihil unde nemo minus dolorum ea mollitia,
             similique qui eius nobis perspiciatis facilis quae tenetur?
        </p>
    </div>
  )
}

export default Paragraph