 import { Container, Row, Col } from 'react-bootstrap'
 import { useState } from 'react'
 import VideoList from '../containers/VideoList'
 import Header from './Header'
 import AddForm from './AddForm'
 import AddButton from './AddButton'
 import ButtonFilter from '../containers/ButtonFilter'
 import { visibilityFilter } from '../redux/visibilityFilter/visibilityFilter'

 const MainContainer = () => {
    const [shouldShowAdd, setShouldShowAdd] = useState(true);

    return (
        <Container>
            <Row>
                <Col xs={4}></Col>
                <Col xs={4}>
                    <Header />
                    <ButtonFilter filter={visibilityFilter.SHOW_ALL}>All</ButtonFilter>
                    <ButtonFilter filter={visibilityFilter.SHOW_TOPTHREE}>Top 3</ButtonFilter>
                    <ButtonFilter filter={visibilityFilter.SHOW_LASTTHREE}>Worst 3</ButtonFilter>
                    <VideoList />
                </Col>
                <Col xs={4}>
                    <Row>
                        <Col xs={9} />
                        <Col xs={3} >
                            <AddButton shouldShowAdd={shouldShowAdd} toggleShowAdd={() => setShouldShowAdd(!shouldShowAdd)} />
                        </Col>
                    </Row>
                    {!shouldShowAdd && <AddForm/>}
                </Col>
            </Row>
        </Container>
    )
}

export default MainContainer