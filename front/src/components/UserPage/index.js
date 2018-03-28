import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { head } from 'lodash'

const PathHeader = styled.h1`
  font-size: 36px;
  color: ${p => p.theme.primaryColor};
`
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
const testFiles = [
  { fileName: 'output.txt', dateModified: '2018-05-13' },
  { fileName: 'readme.md', dateModified: '2018-07-11' },
  { fileName: 'term-paper.doc', dateModified: '2018-07-13' },
  { fileName: 'coolPhoto.jpg', dateModified: '2018-08-14' },
  { fileName: 'spreadsheet.csv', dateModified: '2018-09-18' }
]
class UserPage extends Component {
  render() {
    const { match: { params } } = this.props
    const filePath = Object.values(params).join('/')
    return (
      <Fragment>
        <PathHeader>{filePath}</PathHeader>
        <FilesWrapper>
          {testFiles.map((file, i) => (
            <DescriptionWrapper key={i}>
              <StyledLink to={file.fileName} style={{ marginRight: '10px' }}>
                {file.fileName}
              </StyledLink>
              <p>{file.dateModified}</p>
            </DescriptionWrapper>
          ))}
        </FilesWrapper>
      </Fragment>
    )
  }
}

export default UserPage
