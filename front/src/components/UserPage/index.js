import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import FilesList from './components/FilesList'

const PathHeader = styled.h1`
  font-size: 36px;
  color: ${p => p.theme.primaryColor};
`

const testFiles = [
  { fileName: 'output.txt', dateModified: '2018-05-13' },
  { fileName: 'readme.md', dateModified: '2018-07-11' },
  { fileName: 'term-paper.doc', dateModified: '2018-07-13' },
  { fileName: 'coolPhoto.jpg', dateModified: '2018-08-14' },
  { fileName: 'spreadsheet.csv', dateModified: '2018-09-18' },
  { directoryName: 'school stuff', dateModified: '2018-09-18', files: [
      { fileName: 'assignment1.docx', dateModified: '2017-06-25' },
      { fileName: 'BUS 1011 Final Paper.docx', dateModified: '2016-3-22' }
] }
]
class UserPage extends Component {
    state = {
        filePath: ''
}
    componentDidMount() {
        const { location: {pathname} } = this.props
        console.log(this.props)
        this.setState({ filePath: pathname.replace('/','') })
}
    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
        const { location: { pathname }} = this.props
            this.setState({filePath: pathname.replace('/','') })
}

}
  render() {
    const {filePath} = this.state
    return (
      <Fragment>
        <PathHeader>{filePath}</PathHeader>
        <FilesList files={testFiles} />
      </Fragment>
    )
  }
}

export default UserPage
