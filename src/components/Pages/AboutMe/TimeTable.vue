<template>
    <table class="time-table">
        <tr
            v-for="n in reverseKeys(years)"
            :key="n"
            :set-year="year = n + fromYear"
            :set-left="leftItem = inFirstRange({data: left, year})"
            :set-right="rightItem = inFirstRange({data: right, year})"
            class="row"
        >
            <td class="left-col active" v-if="leftItem" :rowspan="leftItem.to - leftItem.from + 1">
                <component :is="component" :data="leftItem" :position="'left'" />
            </td>
            <td class="left-col" v-else-if="!inRange({data: left, year})" />
            <td class="middle-col">
                <div v-if="inRange({data: left, year})" class="left-stripe" />
                {{year}}
                <div v-if="inRange({data: right, year})" class="right-stripe" />
            </td>
            <td
                class="right-col active"
                v-if="rightItem"
                :rowspan="rightItem.to - rightItem.from + 1"
            >
                <component :is="component" :data="rightItem" :position="'right'" />
            </td>
            <td class="right-col" v-else-if="!inRange({data: right, year})" />
        </tr>
    </table>
</template>

<script>
export default {
    name: 'time-table',
    props: ['data', 'component'],
    computed: {
        fromYear: function() {
            return Math.min.apply(
                Math,
                this.data.map(d => {
                    return d.from;
                })
            );
        },
        toYear: function() {
            return Math.max.apply(
                Math,
                this.data.map(d => {
                    return d.to;
                })
            );
        },
        years: function() {
            return this.toYear - this.fromYear + 1;
        },
        left: function() {
            return this.data.filter((v, i) => !(i % 2));
        },
        right: function() {
            return this.data.filter((v, i) => i % 2);
        }
    },
    methods: {
        inFirstRange: ({ data, year }) => data.find(d => d.to === year),
        inRange: ({ data, year }) => data.find(d => d.to >= year && d.from <= year),
        reverseKeys(n) {
            return [...Array(n).keys()].slice().reverse();
        }
    }
};
</script>