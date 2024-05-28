import type { RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue'
import InfoView from "@/views/FirstPartial/InfoView.vue";
import DynamicViewVue from "@/views/FirstPartial/DynamicView.vue";
import TestViewVue from "@/views/FirstPartial/TestView.vue";
import AuthorViewVue from "@/views/AuthorView.vue";
import IndexView from "@/views/FirstPartial/IndexView.vue";
import IndexSPView from "@/views/SecondPartial/IndexSPView.vue";
import FodaView from "@/views/FirstPartial/ToolsDesitions/FodaView.vue";
import GuestLayoutVue from "@/layouts/GuestLayout.vue";
import DiagramsLayoutVue from "@/layouts/DiagramsLayout.vue";
import IshikawaViewVue from "@/views/FirstPartial/ToolsDesitions/IshikawaView.vue";
import CatwdaViewVue from "@/views/FirstPartial/ToolsDesitions/CatwdaView.vue";
import ParetoViewVue from "@/views/FirstPartial/ToolsDesitions/ParetoView.vue";
import SixHatsViewVue from "@/views/FirstPartial/ToolsDesitions/SixHatsView.vue";
import IndexToolsViewVue from "@/views/FirstPartial/ToolsDesitions/IndexToolsView.vue";
import TestToolsViewVue from "@/views/FirstPartial/ToolsDesitions/TestToolsView.vue";
import OutliersIndexVue from "@/views/SecondPartial/FueraSerie/OutliersIndex.vue";
import GigantsView from "@/views/SecondPartial/GigantsMX/GigantsView.vue";
import IndexThView from '@/views/ThirdPartial/IndexThView.vue'
import ArqView from '@/views/ThirdPartial/arquetipos/ArqView.vue'
import NegotiationView from '@/views/ThirdPartial/nego/NegotiationView.vue'
import QDisView from '@/views/ThirdPartial/quintaDisc/QDisView.vue'
import SupCompView from '@/views/ThirdPartial/superCom/SupCompView.vue'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/author',
        name: 'author',
        component: AuthorViewVue
    },
    {
        path: '/first-partial-index',
        name: 'first-partial-index',
        component: IndexView,
    },
    {
        path: '/first-partial',
        name: 'first-partial',
        component: GuestLayoutVue,
        children: [
            {
                path: '/infografias',
                name: 'infografias',
                component: InfoView
            },
            {
                path: '/dinamica',
                name: 'dinamica',
                component: DynamicViewVue
            },
            {
                path: '/evaluacion',
                name: 'evaluacion',
                component: TestViewVue
            },
        ]
    },
    {
        path: '/first-partial/diagrams',
        name: 'first-partial-diagrams',
        component: DiagramsLayoutVue,
        children: [
            {
                path: '',
                name: 'diagramas-index',
                component: IndexToolsViewVue
            },
            {
                path: '/test-tools',
                name: 'test-tools',
                component: TestToolsViewVue
            },
            {
                path: '/foda',
                name: 'foda',
                component: FodaView
            },
            {
                path: '/ishikawa',
                name: 'ishikawa',
                component: IshikawaViewVue
            },
            {
                path: '/catwda',
                name: 'catwda',
                component: CatwdaViewVue
            },
            {
                path: '/pareto',
                name: 'pareto',
                component: ParetoViewVue
            },
            {
                path: '/seis-sombreros-para-pensar',
                name: 'six-hats',
                component: SixHatsViewVue
            },
        ]
    },
    {
        path: '/second-partial-index',
        name: 'second-partial-index',
        component: IndexSPView,
    },
    {
        path: '/second-partial',
        name: 'second-partial',
        component: GuestLayoutVue,
        children: [
            {
                path: '',
                name: 'outliers',
                component: OutliersIndexVue
            },
            {
                path: '/gigantes-de-mx',
                name: 'gigantsMX',
                component: GigantsView
            },
        ]
    },
    {
        path: '/arq-partial-index',
        name: 'third-partial-index',
        component: IndexThView,
    },
    {
        path: '/arq-partial',
        name: 'third-partial',
        component: GuestLayoutVue,
        children: [
            {
                path: '',
                name: 'arquetipos',
                component: ArqView
            },
            {
                path: '/nego',
                name: 'nego',
                component: NegotiationView
            },
            {
                path: '/quinta-disciplina',
                name: 'qdisc',
                component: QDisView
            },
            {
                path: '/super-competencias',
                name: 'super-competencias',
                component: SupCompView
            },
        ]
    },

];