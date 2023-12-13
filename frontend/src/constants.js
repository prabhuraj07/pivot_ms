
export const aggrFuncList = [
    {
        label: 'Count',
        value: 'count'
    },
    {
        label: 'Count Unique Values',
        value: 'nunique'
    },
    {
        label: 'Sum',
        value: 'sum'
    },
    {
        label: 'Average',
        value: 'mean'
    },
    {
        label:'Median',
        value:'median'
    },
    {
        label:'Sample Variance',
        value:'var'
    },
    {
        label:'Sample Standard Deviation',
        value:'std'
    },
    {
        label:'Minimum',
        value:'min'
    },
    {
        label:'Maximum',
        value:'max'
    },
    {
        label:'First',
        value:'first'
    },
    {
        label:'Last',
        value:'last'
    },
    {
        label:'Sum over sum',
        value:'sum_over_sum'
    }

];

export const masterData = [{ 'id': 0, 'title': 'loan_number' },
{ 'id': 1, 'title': 'disbursement_date' },
{ 'id': 2, 'title': 'first_installment_date' },
{ 'id': 3, 'title': 'repayment_frequency' },
{ 'id': 4, 'title': 'branch_name' },
{ 'id': 5, 'title': 'district_name' },
{ 'id': 6, 'title': 'state_name' },
{ 'id': 7, 'title': 'seasoning' },
{ 'id': 8, 'title': 'remaining_installments' },
{ 'id': 9, 'title': 'total_number_of_repayments' },
{ 'id': 10, 'title': 'disbursement_amount' },
{ 'id': 11, 'title': 'sanction_amount' },
{ 'id': 12, 'title': 'interest_rate' },
{ 'id': 13, 'title': 'user_identifier' },
{ 'id': 14, 'title': 'religion' },
{ 'id': 15, 'title': 'caste' },
{ 'id': 16, 'title': 'customer_type' },
{ 'id': 17, 'title': 'pos' },
{ 'id': 18, 'title': 'ios' },
{ 'id': 19, 'title': 'emi_amount' },
{ 'id': 20, 'title': 'loan_cycle' },
{ 'id': 21, 'title': 'gender' },
{ 'id': 22, 'title': 'name_of_industry' },
{ 'id': 23, 'title': 'SN' },
{ 'id': 24, 'title': 'Borrower Code' },
{ 'id': 25, 'title': 'Branch Code' },
{ 'id': 26, 'title': 'Group Name' },
{ 'id': 27, 'title': 'Client Name' },
{ 'id': 28, 'title': 'Loan Purpose' },
{ 'id': 29, 'title': 'PSL/Non PSL' },
{ 'id': 30, 'title': 'Bureau Veirified' },
{ 'id': 31, 'title': 'Village' },
{ 'id': 32, 'title': 'Pin code' },
{ 'id': 33, 'title': 'Sanction Date' },
{ 'id': 34, 'title': 'Seasoning (No of Days)' },
{ 'id': 35, 'title': 'Income Recognition & Asset Classification (IRAC)' },
{ 'id': 36, 'title': 'Instalment Type' },
{ 'id': 37, 'title': 'Interest Type' },
{ 'id': 38, 'title': 'Prepayment Penalty' },
{ 'id': 39, 'title': 'Prepayment Penalty Type' },
{ 'id': 40, 'title': 'Preclosure Penalty' },
{ 'id': 41, 'title': 'Preclosure Penalty Type' },
{ 'id': 42, 'title': 'Penalty on Overdues' },
{ 'id': 43, 'title': 'Overdues Penalty Type' },
{ 'id': 44, 'title': 'Upfront Charges' },
{ 'id': 45, 'title': 'Upfront Charge Type' },
{ 'id': 46, 'title': 'Upfront Refundable Deposits' },
{ 'id': 47, 'title': 'Upfront Deposit Type' },
{ 'id': 48, 'title': 'Other Upfront Collections' },
{ 'id': 49, 'title': 'Other Upfront Collections Type' },
{ 'id': 50, 'title': 'Maturity Date' },
{ 'id': 51, 'title': 'Total Principal Due Amount' },
{ 'id': 52, 'title': 'Total Interest Due Amount' },
{ 'id': 53, 'title': 'Product Name' },
{ 'id': 54, 'title': 'Mobile Number' },
{ 'id': 55, 'title': 'Mask Adhar' },
{ 'id': 56, 'title': 'Current DPD' },
{ 'id': 57, 'title': 'Peek DPD' },
{ 'id': 58, 'title': 'Land Holding\n(in acres)' },
{ 'id': 59, 'title': 'Land Holding\n(in hectares)' },
{ 'id': 60, 'title': 'Land Holding Buckets' },
{ 'id': 61, 'title': 'MHP (In Months)' },
{ 'id': 62, 'title': 'Residual Maturity (In Days)' },
{ 'id': 63, 'title': 'Computed POS' },
{ 'id': 64, 'title': 'Computed IOS' },
{ 'id': 65, 'title': 'Computed Cashflows' },
{ 'id': 66, 'title': 'Repayment Frequency' },
{ 'id': 67, 'title': 'Number of Repayments' },
{ 'id': 68, 'title': 'Computed Seasoning' },
{ 'id': 69, 'title': 'Remaining Installments' }]


export const master_columns = [{ 'title': 'loan_number', 'data_type': 'int64' },
{ 'title': 'disbursement_date', 'data_type': 'datetime64[ns]' },
{ 'title': 'first_installment_date', 'data_type': 'datetime64[ns]' },
{ 'title': 'repayment_frequency', 'data_type': 'object' },
{ 'title': 'branch_name', 'data_type': 'object' },
{ 'title': 'district_name', 'data_type': 'object' },
{ 'title': 'state_name', 'data_type': 'object' },
{ 'title': 'seasoning', 'data_type': 'int64' },
{ 'title': 'remaining_installments', 'data_type': 'int64' },
{ 'title': 'total_number_of_repayments', 'data_type': 'int64' },
{ 'title': 'disbursement_amount', 'data_type': 'int64' },
{ 'title': 'sanction_amount', 'data_type': 'int64' },
{ 'title': 'interest_rate', 'data_type': 'float64' },
{ 'title': 'user_identifier', 'data_type': 'float64' },
{ 'title': 'religion', 'data_type': 'object' },
{ 'title': 'caste', 'data_type': 'object' },
{ 'title': 'customer_type', 'data_type': 'object' },
{ 'title': 'pos', 'data_type': 'float64' },
{ 'title': 'ios', 'data_type': 'float64' },
{ 'title': 'emi_amount', 'data_type': 'int64' },
{ 'title': 'loan_cycle', 'data_type': 'int64' },
{ 'title': 'gender', 'data_type': 'object' },
{ 'title': 'name_of_industry', 'data_type': 'object' },
{ 'title': 'SN', 'data_type': 'int64' },
{ 'title': 'Borrower Code', 'data_type': 'object' },
{ 'title': 'Branch Code', 'data_type': 'object' },
{ 'title': 'Group Name', 'data_type': 'object' },
{ 'title': 'Client Name', 'data_type': 'object' },
{ 'title': 'Loan Purpose', 'data_type': 'object' },
{ 'title': 'PSL/Non PSL', 'data_type': 'object' },
{ 'title': 'Bureau Veirified', 'data_type': 'object' },
{ 'title': 'Village', 'data_type': 'object' },
{ 'title': 'Pin code', 'data_type': 'int64' },
{ 'title': 'Sanction Date', 'data_type': 'object' },
{ 'title': 'Seasoning (No of Days)', 'data_type': 'int64' },
{
    'title': 'Income Recognition & Asset Classification (IRAC)',
    'data_type': 'object'
},
{ 'title': 'Instalment Type', 'data_type': 'object' },
{ 'title': 'Interest Type', 'data_type': 'object' },
{ 'title': 'Prepayment Penalty', 'data_type': 'object' },
{ 'title': 'Prepayment Penalty Type', 'data_type': 'object' },
{ 'title': 'Preclosure Penalty', 'data_type': 'object' },
{ 'title': 'Preclosure Penalty Type', 'data_type': 'object' },
{ 'title': 'Penalty on Overdues', 'data_type': 'object' },
{ 'title': 'Overdues Penalty Type', 'data_type': 'object' },
{ 'title': 'Upfront Charges', 'data_type': 'float64' },
{ 'title': 'Upfront Charge Type', 'data_type': 'object' },
{ 'title': 'Upfront Refundable Deposits', 'data_type': 'object' },
{ 'title': 'Upfront Deposit Type', 'data_type': 'object' },
{ 'title': 'Other Upfront Collections', 'data_type': 'object' },
{ 'title': 'Other Upfront Collections Type', 'data_type': 'float64' },
{ 'title': 'Maturity Date', 'data_type': 'object' },
{ 'title': 'Total Principal Due Amount', 'data_type': 'float64' },
{ 'title': 'Total Interest Due Amount', 'data_type': 'float64' },
{ 'title': 'Product Name', 'data_type': 'object' },
{ 'title': 'Mobile Number', 'data_type': 'int64' },
{ 'title': 'Mask Adhar', 'data_type': 'object' },
{ 'title': 'Current DPD', 'data_type': 'int64' },
{ 'title': 'Peek DPD', 'data_type': 'int64' },
{ 'title': 'Land Holding\n(in acres)', 'data_type': 'float64' },
{ 'title': 'Land Holding\n(in hectares)', 'data_type': 'float64' },
{ 'title': 'Land Holding Buckets', 'data_type': 'object' },
{ 'title': 'MHP (In Months)', 'data_type': 'int64' },
{ 'title': 'Residual Maturity (In Days)', 'data_type': 'int64' },
{ 'title': 'Computed POS', 'data_type': 'float64' },
{ 'title': 'Computed IOS', 'data_type': 'float64' },
{ 'title': 'Computed Cashflows', 'data_type': 'float64' },
{ 'title': 'Repayment Frequency', 'data_type': 'object' },
{ 'title': 'Number of Repayments', 'data_type': 'int64' },
{ 'title': 'Computed Seasoning', 'data_type': 'int64' },
{ 'title': 'Remaining Installments', 'data_type': 'int64' }]


export const getSumSupportedColumns = (rows, columns) => {

    const row_list = rows.map((item) => (item.title));
    const column_list = columns.map((item) => (item.title));
    // Sum supports int, float
    const filteredColumns = master_columns.filter(item => item.data_type.toLowerCase().startsWith('int') || item.data_type.toLowerCase().startsWith('float'));
    const row_filtered_data = filteredColumns.filter(item => row_list.indexOf(item.title) === -1);
    const column_filtered_data = row_filtered_data.filter(item => column_list.indexOf(item.title) === -1);
    return column_filtered_data
}