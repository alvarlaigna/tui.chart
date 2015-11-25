ne.util.defineNamespace("fedoc.content", {});
fedoc.content["charts_columnChart.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Column chart.\n * @author NHN Ent.\n *         FE Development Team &lt;dl_javascript@nhnent.com>\n */\n\n'use strict';\n\nvar ChartBase = require('./chartBase'),\n    axisTypeMixer = require('./axisTypeMixer'),\n    verticalTypeMixer = require('./verticalTypeMixer'),\n    Series = require('../series/columnChartSeries');\n\nvar ColumnChart = tui.util.defineClass(ChartBase, /** @lends ColumnChart.prototype */ {\n    /**\n     * Column chart.\n     * @constructs ColumnChart\n     * @extends ChartBase\n     * @mixes axisTypeMixer\n     * @mixes verticalTypeMixer\n     * @param {array.&lt;array>} userData chart data\n     * @param {object} theme chart theme\n     * @param {object} options chart options\n     * @param {object} initedData initialized data from combo chart\n     */\n    init: function(userData, theme, options) {\n        /**\n         * className\n         * @type {string}\n         */\n        this.className = 'tui-column-chart';\n\n        ChartBase.call(this, {\n            userData: userData,\n            theme: theme,\n            options: options,\n            hasAxes: true,\n            isVertical: true\n        });\n\n        this._addComponents(this.convertedData, options.chartType);\n    },\n\n    /**\n     * Add components\n     * @param {object} convertedData converted data\n     * @param {string} chartType chart type\n     * @private\n     */\n    _addComponents: function(convertedData, chartType) {\n        var seriesData = {\n            allowNegativeTooltip: true,\n            data: {\n                values: convertedData.values,\n                formattedValues: convertedData.formattedValues,\n                formatFunctions: convertedData.formatFunctions,\n                joinLegendLabels: convertedData.joinLegendLabels\n            }\n        };\n        this._addComponentsForAxisType({\n            convertedData: convertedData,\n            axes: ['yAxis', 'xAxis'],\n            chartType: chartType,\n            serieses: [\n                {\n                    name: 'series',\n                    SeriesClass: Series,\n                    data: seriesData\n                }\n            ]\n        });\n    }\n});\n\naxisTypeMixer.mixin(ColumnChart);\nverticalTypeMixer.mixin(ColumnChart);\n\nmodule.exports = ColumnChart;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"