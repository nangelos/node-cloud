import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FilesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
const DescriptionWrapper = styled.div`
  display: flex;
  margin: 20px;
  font-size: 12px;
  justify-content: space-between;
  color: ${p => p.theme.primaryColor};
  align-items: baseline;
`
const StyledLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: ${p => p.theme.primaryColor};
`
class FilesList extends Component {
    render() {
        const { files } = this.props
        return (
            <FilesWrapper>
          {files.map((file, i) => (
            <DescriptionWrapper key={i}>
              <StyledLink to={file.directoryName ? file.directoryName : file.fileName} style={{ marginRight: '10px' }}>
                {file.directoryName ? file.directoryName : file.fileName}
              </StyledLink>
              <p>{file.dateModified}</p>
            </DescriptionWrapper>
          ))}
        </FilesWrapper>
)
}

}
    export default FilesList
