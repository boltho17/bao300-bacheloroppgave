import React from 'react';
import { Badge, Button } from 'reactstrap';

const FilterBadge = (props) => {
    return (
        <div>
            <Button color="primary" size="sm" outline>
                {props.filterName} <Badge color="secondary">X</Badge>
            </Button>
        </div>
    );
}

export default FilterBadge;
