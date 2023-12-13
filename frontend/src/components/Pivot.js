import {
    Box,
    Container,
    Stack,
    Typography,
    Unstable_Grid2 as Grid,
    Divider,
    Card,
    Table,
    TextField,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
    Paper
} from '@mui/material';
import { Scrollbar } from './Scrollbar';


const Pivot = (props) => {

    const { headers,
            tablerows,
            tabledata,
            aggrFuncList,
            onAggFuncChange,
            masterData,
            selectedValue,
            setSelectedValue,
            aggfuncValue,
            value_required_func,
            multi_value_required_func,
            selectedValuesos,
            setSelectedValueSOS
        
        } = props.pivotData;
    
    
    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 4,
                    width: {
                        sm: `calc(100% - 280px)`,
                    }
                }}
            >
                <Container maxWidth='xl'>
                    <Grid
                        container
                        disableEqualOverflow
                        spacing={{
                            xs: 3,
                            lg: 4
                        }}
                    >
                        <Grid xs={12}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                spacing={4}
                            >
                                <div>
                                    <Typography variant="h4">
                                        Pivot Table
                                    </Typography>
                                </div>
                                <div>
                                    <Stack
                                        direction="row"
                                        spacing={4}
                                    >

                                    </Stack>
                                </div>
                            </Stack>
                            <Grid
                                xs={12}
                                md={12}
                                lg={12}
                            >
                                <Card sx={{ minHeight: 800, borderRadius: 2 }}>
                                    <Stack
                                        alignItems="center"
                                        direction="row"
                                        flexWrap="wrap"
                                        spacing={3}
                                        sx={{ p: 1 }}
                                    >
                                        <Box
                                            component="form"
                                            sx={{ flexGrow: 1 }}
                                        >
                                            <Typography align='left' variant='h6'>Pivot Data</Typography>
                                        </Box>
                                        <TextField
                                            label="Aggr Func"
                                            name="aggr_func"
                                            onChange={onAggFuncChange}
                                            select
                                            SelectProps={{ native: true }}
                                            value={aggfuncValue}
                                        >
                                            {aggrFuncList && aggrFuncList.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                        {value_required_func.indexOf(aggfuncValue) !==  -1 &&
                                            <TextField
                                                label="Select Value"
                                                name="select_value"
                                                onChange={(e)=>setSelectedValue(e.target.value)}
                                                select
                                                SelectProps={{ native: true }}
                                                value={selectedValue}
                                            >
                                                <option value="">None</option>
                                                {masterData && masterData.map((option) => (
                                                    <option
                                                        key={option.title}
                                                        value={option.title}
                                                    >
                                                        {option.title}
                                                    </option>
                                                ))}
                                            </TextField>
                                        }
                                        {multi_value_required_func.indexOf(aggfuncValue) !==  -1 &&
                                            <TextField
                                                label="Select Value 2"
                                                name="select_value"
                                                onChange={(e)=>setSelectedValueSOS(e.target.value)}
                                                select
                                                SelectProps={{ native: true }}
                                                value={selectedValuesos}
                                            >
                                                <option value="">None</option>
                                                {masterData && masterData.map((option) => (
                                                    <option
                                                        key={option.title}
                                                        value={option.title}
                                                    >
                                                        {option.title}
                                                    </option>
                                                ))}
                                            </TextField>
                                        }
                                        
                                    </Stack>
                                    <Divider />
                                    <Box component="form" sx={{ flexGrow: 1 }}>
                                        {/* <div dangerouslySetInnerHTML={{ __html: tabledata.html_content }} /> */}
                                        <TableContainer component={Paper}>
                                            <Table>
                                                {headers && headers.map((headerRow, colIndex) => (
                                                    <TableHead key={colIndex}>
                                                        <TableRow>
                                                            {headerRow.map((headerCell, headIndex) => (
                                                                <TableCell key={headIndex} rowSpan={headerCell.rowspan} colSpan={headerCell.colspan}>
                                                                    {headerCell.text}
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    </TableHead>
                                                ))}
                                                <TableBody>
                                                    {tablerows && tablerows.map((row, rowIndex) => (
                                                        <TableRow key={rowIndex}>
                                                            {row.map((cell, cellIndex) => (
                                                                <TableCell key={cellIndex} rowSpan={cell.rowspan} colSpan={cell.colspan}>
                                                                    {cell.text}
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                </Card>

                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>

    )
}

export default Pivot;
