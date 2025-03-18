import { Col, Row } from 'react-bootstrap';
import { LottieHandler } from '@components/feedback';


type GridListProps<T> = {
    records: T[];
    renderItem: (record: T) => React.ReactNode;
    emptyMessage: string;
}

type HasId = { id? : number};

const GridList = <T extends HasId>({records, renderItem, emptyMessage} : GridListProps<T>) => {
    const categoriesList = records.length > 0 ? records.map((record) => {
        return (
          <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={record.id}>
            {renderItem(record)}
          </Col>
        );
      }) : <Col>
      <LottieHandler type='empty' message={emptyMessage}/>
      </Col>;
    
  return (
    <div>
         <Row>
          {categoriesList}
          </Row>
    </div>
  )
}

export default GridList
