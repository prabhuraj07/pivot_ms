import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, ListSubheader, Divider, Typography, Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import StorageIcon from '@mui/icons-material/Storage';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Scrollbar } from './Scrollbar';
// import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import CloseIcon from '@mui/icons-material/Close';

const dndPlaceholderStyle = {
    paddingLeft: '16px',
    paddingRight: '16px'
}

export const CategoryList = (props) => {
    const { rows, setRows, columns, setColumns, mastersColumn, onDragEvent, setHeaders, setTableRows } = props.statedata;


    const handleDeleteRows = (id) => {
        console.log(id)
        console.info('You clicked the delete icon.');
        const newRow = rows.filter(item => item.id !== id);
        setRows(newRow);
        setHeaders([]);
        setTableRows([]);
    };

    const handleDeleteColumns = (id) => {
        console.log(id)
        console.info('You clicked the delete icon.');
        const newColumns = columns.filter(item => item.id !== id);
        setColumns(newColumns);
        setHeaders([]);
        setTableRows([]);
    };
    const onDragEnd = (result) => {
        console.log(result)
        if (!result.destination) {
            return;
        }
        if (result.destination.droppableId === 'rows_data') {
            const master_result = Array.from(mastersColumn);
            const row_result = Array.from(rows)
            const column_result = Array.from(columns)
            let source_index = result.source.index;
            let drop_index = result.destination.index;
            console.log(row_result, column_result)
            if (result.source.droppableId == "master_data") {
                const removed = master_result[source_index];
                const isIdInArray = row_result.some(item => item.id === removed.id);
                if (!isIdInArray) {
                    row_result.splice(drop_index, 0, removed)
                    setRows(row_result);
                }
            } else if (result.source.droppableId == "columns_data") {
                console.log("coming")
                const [removed] = column_result.splice(source_index, 1);
                const isIdInArray = row_result.some(item => item.id === removed.id);
                console.log(isIdInArray)
                setColumns(column_result);
                if (!isIdInArray) {
                    row_result.splice(drop_index, 0, removed)
                    setRows(row_result);
                }
            }
            //onDragEvent(row_result.map((item) => (item.title)), column_result.map((item) => (item.title)));

        } else if (result.destination.droppableId === 'columns_data') {
            const master_result = Array.from(mastersColumn);
            const row_result = Array.from(rows)
            const column_result = Array.from(columns)
            console.log(column_result, "col");
            console.log(master_result, "master");
            let source_index = result.source.index;
            let drop_index = result.destination.index;

            if (result.source.droppableId == "master_data") {
                const removed = master_result[source_index];
                const isIdInArray = column_result.some(item => item.id === removed.id);
                if (!isIdInArray) {
                    column_result.splice(drop_index, 0, removed)
                    setColumns(column_result);
                }
            } else if (result.source.droppableId == "rows_data") {

                const [removed] = row_result.splice(source_index, 1);
                setRows(row_result)
                const isIdInArray = column_result.some(item => item.id === removed.id);
                if (!isIdInArray) {
                    column_result.splice(drop_index, 0, removed)
                    setColumns(column_result);
                }
            }
            //onDragEvent(row_result.map((item) => (item.title)), column_result.map((item) => (item.title)));
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="master_data">
                {(provided) => (
                    <List
                        dense={true}
                        sx={{
                            width: '100%',
                            maxWidth: 280,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 250,
                            '& ul': { padding: 0 },
                        }}
                        subheader={<ListSubheader>
                            <Stack direction="row">
                                <StorageIcon sx={{ paddingRight: 2 }} />
                                <Typography align='left' variant="subtitle1">
                                    Master Data
                                </Typography>
                            </Stack>

                        </ListSubheader>}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {mastersColumn && mastersColumn.map((masterColumn, index) => (
                            <Draggable key={masterColumn.id} draggableId={"mc-" + masterColumn.id} index={index}>
                                {(provided, snapshot) => (
                                    <ListItem
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        <Chip sx={{ borderRadius: '5px', width: '100%', justifyContent: "flex-start" }}
                                            icon={<DragIndicatorIcon />} label={masterColumn.title} />
                                    </ListItem>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </List>
                )}
            </Droppable>
            <Divider sx={{ p: 1 }} />
            <Droppable droppableId='rows_data'>

                {(provided, snapshot) => (
                    <List
                        dense={true}
                        sx={{
                            width: '100%',
                            maxWidth: 280,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            // maxHeight: 300,
                            // minHeight: 300,
                            '& ul': { padding: 1 },
                        }}
                        subheader={<ListSubheader>
                            <Stack direction="row">
                                <TableRowsIcon sx={{ paddingRight: 2 }} />
                                <Typography align='left' variant="subtitle1">
                                    Rows
                                </Typography>
                            </Stack>
                        </ListSubheader>}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {rows.map((row, index) => (
                            <Draggable key={row.id} draggableId={"r-" + row.id} index={index}>
                                {(provided, snapshot) => (
                                    <ListItem
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        <Chip
                                            deleteIcon={<CloseIcon sx={{ position: 'absolute', right: '5px' }} />}
                                            color="success"
                                            sx={{
                                                borderRadius: '5px',
                                                width: '100%',
                                                justifyContent: "flex-start"
                                            }}
                                            icon={<DragIndicatorIcon sx={{}}/>}
                                            label={row.title}
                                            onDelete={() => { handleDeleteRows(row.id); }} />
                                    </ListItem>
                                )}
                            </Draggable>
                        ))}

                        <div style={dndPlaceholderStyle}>
                            <Chip
                                key="row"
                                sx={{
                                    width: '100%',
                                    borderRadius: '5px', border: '2px dotted #ccc', backgroundColor: 'white', borderColor: 'green'
                                }} label="Drag here" />
                            {provided.placeholder}
                        </div>
                    </List>

                )}

            </Droppable>
            <Divider />
            <Droppable droppableId='columns_data'>
                {(provided, snapshot) => (
                    <List
                        dense={true}
                        sx={{
                            width: '100%',
                            maxWidth: 280,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            // maxHeight: 300,
                            // minHeight: 300,
                            '& ul': { padding: 0 },
                        }}
                        subheader={<ListSubheader>
                            <Stack direction="row">
                                <ViewColumnIcon sx={{ paddingRight: 2 }} />
                                <Typography align='left' variant="subtitle1">
                                    Columns
                                </Typography>
                            </Stack>
                        </ListSubheader>}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {columns.map((column, index) => (
                            <Draggable key={column.id} draggableId={"c-" + column.id} index={index}>
                                {(provided, snapshot) => (
                                    <ListItem
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        <Chip color="success"
                                            deleteIcon={<CloseIcon sx={{ position: 'absolute', right: '5px' }} />}
                                            sx={{
                                                borderRadius: '5px',
                                                width: '100%',
                                                justifyContent: "flex-start"
                                            }}
                                            icon={<DragIndicatorIcon sx={{color:'white'}} />}
                                            label={column.title}
                                            onDelete={() => { handleDeleteColumns(column.id); }} />
                                    </ListItem>
                                )}
                            </Draggable>
                        ))}
                        <div style={dndPlaceholderStyle}>
                           <Chip
                            key="column"
                            sx={{
                                width: '100%',
                                borderRadius: '5px', border: '2px dotted #ccc', backgroundColor: 'white', borderColor: 'green'
                            }} label="Drag here" />
                            {provided.placeholder}
                        </div>
                    </List>
                )}
            </Droppable>
        </DragDropContext>
    )
}
