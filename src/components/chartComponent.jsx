import axios from 'axios';
import React, { Component } from 'react';
import {
    Area, AreaChart, Brush, CartesianGrid, Line, LineChart,
    Tooltip, XAxis, YAxis, ResponsiveContainer
} from 'recharts';


class ChartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            records: [{ "date": "2004-01", "count": 5 },
            { "date": "2004-02", "count": 5 },
            { "date": "2004-03", "count": 6 },
            { "date": "2004-04", "count": 5 },
            { "date": "2004-05", "count": 6 },
            { "date": "2004-06", "count": 5 },
            { "date": "2004-07", "count": 6 },
            { "date": "2004-08", "count": 6 },
            { "date": "2004-09", "count": 5 },
            { "date": "2004-10", "count": 8 },
            { "date": "2004-11", "count": 6 },
            { "date": "2004-12", "count": 7 },
            { "date": "2005-01", "count": 7 },
            { "date": "2005-02", "count": 9 },
            { "date": "2005-03", "count": 9 },
            { "date": "2005-04", "count": 7 },
            { "date": "2005-05", "count": 8 },
            { "date": "2005-06", "count": 7 },
            { "date": "2005-07", "count": 7 },
            { "date": "2005-08", "count": 8 },
            { "date": "2005-09", "count": 9 },
            { "date": "2005-10", "count": 11 },
            { "date": "2005-11", "count": 8 },
            { "date": "2005-12", "count": 8 },
            { "date": "2006-01", "count": 9 }, { "date": "2006-02", "count": 12 }, { "date": "2006-03", "count": 11 }, { "date": "2006-04", "count": 11 }, { "date": "2006-05", "count": 11 }, { "date": "2006-06", "count": 11 }, { "date": "2006-07", "count": 10 }, { "date": "2006-08", "count": 11 }, { "date": "2006-09", "count": 12 }, { "date": "2006-10", "count": 16 }, { "date": "2006-11", "count": 12 }, { "date": "2006-12", "count": 12 }, { "date": "2007-01", "count": 12 }, { "date": "2007-02", "count": 16 }, { "date": "2007-03", "count": 15 }, { "date": "2007-04", "count": 15 }, { "date": "2007-05", "count": 17 }, { "date": "2007-06", "count": 18 }, { "date": "2007-07", "count": 18 }, { "date": "2007-08", "count": 17 }, { "date": "2007-09", "count": 19 }, { "date": "2007-10", "count": 23 }, { "date": "2007-11", "count": 19 }, { "date": "2007-12", "count": 17 }, { "date": "2008-01", "count": 19 }, { "date": "2008-02", "count": 25 }, { "date": "2008-03", "count": 24 }, { "date": "2008-04", "count": 24 }, { "date": "2008-05", "count": 25 }, { "date": "2008-06", "count": 23 }, { "date": "2008-07", "count": 25 }, { "date": "2008-08", "count": 26 }, { "date": "2008-09", "count": 26 }, { "date": "2008-10", "count": 31 }, { "date": "2008-11", "count": 27 }, { "date": "2008-12", "count": 25 }, { "date": "2009-01", "count": 29 }, { "date": "2009-02", "count": 36 }, { "date": "2009-03", "count": 33 }, { "date": "2009-04", "count": 35 }, { "date": "2009-05", "count": 37 }, { "date": "2009-06", "count": 36 }, { "date": "2009-07", "count": 36 }, { "date": "2009-08", "count": 37 }, { "date": "2009-09", "count": 36 }, { "date": "2009-10", "count": 44 }, { "date": "2009-11", "count": 37 }, { "date": "2009-12", "count": 35 }, { "date": "2010-01", "count": 37 }, { "date": "2010-02", "count": 47 }, { "date": "2010-03", "count": 46 }, { "date": "2010-04", "count": 46 }, { "date": "2010-05", "count": 49 }, { "date": "2010-06", "count": 48 }, { "date": "2010-07", "count": 55 }, { "date": "2010-08", "count": 63 }, { "date": "2010-09", "count": 59 }, { "date": "2010-10", "count": 64 }, { "date": "2010-11", "count": 57 }, { "date": "2010-12", "count": 54 }, { "date": "2011-01", "count": 55 }, { "date": "2011-02", "count": 73 }, { "date": "2011-03", "count": 68 }, { "date": "2011-04", "count": 75 }, { "date": "2011-05", "count": 69 }, { "date": "2011-06", "count": 70 }, { "date": "2011-07", "count": 69 }, { "date": "2011-08", "count": 78 }, { "date": "2011-09", "count": 72 }, { "date": "2011-10", "count": 85 }, { "date": "2011-11", "count": 80 }, { "date": "2011-12", "count": 79 }, { "date": "2012-01", "count": 80 }, { "date": "2012-02", "count": 95 }, { "date": "2012-03", "count": 92 }, { "date": "2012-04", "count": 93 }, { "date": "2012-05", "count": 90 }, { "date": "2012-06", "count": 89 }, { "date": "2012-07", "count": 87 }, { "date": "2012-08", "count": 88 }, { "date": "2012-09", "count": 92 }, { "date": "2012-10", "count": 97 }, { "date": "2012-11", "count": 85 }, { "date": "2012-12", "count": 83 }, { "date": "2013-01", "count": 79 }, { "date": "2013-02", "count": 100 }, { "date": "2013-03", "count": 100 }, { "date": "2013-04", "count": 86 }, { "date": "2013-05", "count": 88 }, { "date": "2013-06", "count": 84 }, { "date": "2013-07", "count": 85 }, { "date": "2013-08", "count": 84 }, { "date": "2013-09", "count": 82 }, { "date": "2013-10", "count": 93 }, { "date": "2013-11", "count": 86 }, { "date": "2013-12", "count": 84 }, { "date": "2014-01", "count": 81 }, { "date": "2014-02", "count": 98 }, { "date": "2014-03", "count": 94 }, { "date": "2014-04", "count": 89 }, { "date": "2014-05", "count": 84 }, { "date": "2014-06", "count": 77 }, { "date": "2014-07", "count": 80 }, { "date": "2014-08", "count": 80 }, { "date": "2014-09", "count": 81 }, { "date": "2014-10", "count": 87 }, { "date": "2014-11", "count": 82 }, { "date": "2014-12", "count": 76 }, { "date": "2015-01", "count": 73 }, { "date": "2015-02", "count": 85 }, { "date": "2015-03", "count": 79 }, { "date": "2015-04", "count": 74 }, { "date": "2015-05", "count": 74 }, { "date": "2015-06", "count": 72 }, { "date": "2015-07", "count": 72 }, { "date": "2015-08", "count": 69 }, { "date": "2015-09", "count": 69 }, { "date": "2015-10", "count": 81 }, { "date": "2015-11", "count": 70 }, { "date": "2015-12", "count": 68 }, { "date": "2016-01", "count": 66 }, { "date": "2016-02", "count": 74 }, { "date": "2016-03", "count": 71 }, { "date": "2016-04", "count": 65 }, { "date": "2016-05", "count": 66 }, { "date": "2016-06", "count": 62 }, { "date": "2016-07", "count": 60 }, { "date": "2016-08", "count": 56 }, { "date": "2016-09", "count": 60 }, { "date": "2016-10", "count": 66 }, { "date": "2016-11", "count": 60 }, { "date": "2016-12", "count": 58 }, { "date": "2017-01", "count": 55 }, { "date": "2017-02", "count": 70 }, { "date": "2017-03", "count": 60 }, { "date": "2017-04", "count": 60 }, { "date": "2017-05", "count": 59 }, { "date": "2017-06", "count": 53 }, { "date": "2017-07", "count": 50 }, { "date": "2017-08", "count": 53 }, { "date": "2017-09", "count": 52 }, { "date": "2017-10", "count": 61 }, { "date": "2017-11", "count": 53 }, { "date": "2017-12", "count": 50 }, { "date": "2018-01", "count": 50 }, { "date": "2018-02", "count": 58 }, { "date": "2018-03", "count": 56 }, { "date": "2018-04", "count": 50 }, { "date": "2018-05", "count": 50 }, { "date": "2018-06", "count": 47 }, { "date": "2018-07", "count": 47 }, { "date": "2018-08", "count": 47 }, { "date": "2018-09", "count": 48 }, { "date": "2018-10", "count": 51 }, { "date": "2018-11", "count": 47 }, { "date": "2018-12", "count": 49 }, { "date": "2019-01", "count": 48 }, { "date": "2019-02", "count": 55 }, { "date": "2019-03", "count": 49 }, { "date": "2019-04", "count": 49 }, { "date": "2019-05", "count": 45 }, { "date": "2019-06", "count": 43 }, { "date": "2019-07", "count": 41 }, { "date": "2019-08", "count": 42 }, { "date": "2019-09", "count": 44 }, { "date": "2019-10", "count": 56 }, { "date": "2019-11", "count": 44 }, { "date": "2019-12", "count": 43 }, { "date": "2020-01", "count": 40 }, { "date": "2020-02", "count": 49 }, { "date": "2020-03", "count": 44 }, { "date": "2020-04", "count": 55 }, { "date": "2020-05", "count": 57 }, { "date": "2020-06", "count": 51 }, { "date": "2020-07", "count": 47 }, { "date": "2020-08", "count": 46 }, { "date": "2020-09", "count": 44 }, { "date": "2020-10", "count": 49 }, { "date": "2020-11", "count": 42 }, { "date": "2020-12", "count": 43 }, { "date": "2021-01", "count": 43 }, { "date": "2021-02", "count": 53 }, { "date": "2021-03", "count": 47 }]
        }

        this.launchUpdates = this.launchUpdates.bind(this);
    }

    componentDidMount() {
        this.launchUpdates()
    }

    render() {
        return (
            <div>
                <h1>
                    Cupcake Interest
                    <br />
                    <br />

                    {/* <LineChart
                        width={1280} height={720} data={this.state.records}
                        margin={{ top: 40, right: 40, bottom: 20, left: 400 }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="date" label="Date" />
                        <YAxis domain={['auto', 'auto']} />
                        <Tooltip
                            wrapperStyle={{
                                borderColor: 'white',
                                boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
                            }}
                            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            labelStyle={{ fontWeight: 'bold', color: '#666666' }}
                        />
                        <Line dataKey="count" stroke="#317df7" fill="#317df7" dot={false} />
                        <Brush dataKey="date" startIndex={0}>
                            <AreaChart>
                                <CartesianGrid />
                                <YAxis hide domain={['auto', 'auto']} />
                                <Area dataKey="count" stroke="#317df7" fill="#317df7" dot={false} />
                            </AreaChart>
                        </Brush>
                    </LineChart> */}

                    <AreaChart
                        width={1600}
                        height={720}
                        data={this.state.records}
                        margin={{
                            top: 40,
                            right: 40,
                            left: 400,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" fontSize="15" />
                        <YAxis fontSize="20" />
                        <Tooltip />
                        <Area type="monotone" dataKey="count" stroke="#317df7" fill="#317df7" />
                    </AreaChart>

                </h1>
            </div>
        );
    }

    launchUpdates() {
        setInterval(async () => {
            var resp = await axios.get("https://v9s1jkzlu3.execute-api.ap-south-1.amazonaws.com/staging/records");
            await this.setState({
                records: resp.data
            });
            // console.log(resp.data)
        }, 5 * 60 * 1000); // 5 minutes timeout
    }
}

export default ChartComponent;