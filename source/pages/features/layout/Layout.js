// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Container from '~/components/layout/container/Container'
import Flex from '~/components/layout/flex/Flex'
import Heading from '~/components/type/heading/Heading'
import Page from '~/components/layout/page/Page'

// Style
import './Layout.less'

// Page: Features > Layout
const Layout = () => {
  // Render
  return (
    <Page
      name="layout"
      parentName="features">
      <Helmet>
        <title>Isomorphic | Layout</title>
      </Helmet>
      <Page.Header name="introduction">
        <Container>
          <Heading displaySize="big">Layout</Heading>
          <p>This is <b>Layout</b> page, a subpage of <Link to="/features">Features</Link> page.</p>
        </Container>
      </Page.Header>
      <Page.Section name="flex-vertical-alignment">
        <Container>
          <Heading rank={2}>Flex alignment - Vertical</Heading>
        </Container>
        <Container>
          <Heading rank={3}>Top</Heading>
          <Flex vertical="top">
            <Flex.Item>
              <div>Aligned to top</div>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </Flex.Item>
            <Flex.Item>
              <div>Aligned to top</div>
              <div>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </Flex.Item>
            <Flex.Item>
              <div>Aligned to top</div>
              <div>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>Middle</Heading>
          <Flex vertical="middle">
            <Flex.Item>
              <div>Aligned to middle</div>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </Flex.Item>
            <Flex.Item>
              <div>Aligned to middle</div>
              <div>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </Flex.Item>
            <Flex.Item>
              <div>Aligned to middle</div>
              <div>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>Bottom</Heading>
          <Flex vertical="bottom">
            <Flex.Item>
              <div>Aligned to bottom</div>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </Flex.Item>
            <Flex.Item>
              <div>Aligned to bottom</div>
              <div>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </Flex.Item>
            <Flex.Item>
              <div>Aligned to bottom</div>
              <div>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>Stretch</Heading>
          <Flex vertical="stretch">
            <Flex.Item>
              <div>Stretched to top and bottom</div>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </Flex.Item>
            <Flex.Item>
              <div>Stretched to top and bottom</div>
              <div>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </Flex.Item>
            <Flex.Item>
              <div>Stretched to top and bottom</div>
              <div>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            </Flex.Item>
          </Flex>
        </Container>
      </Page.Section>
      <Page.Section name="flex-horizontal-alignment">
        <Container>
          <Heading rank={2}>Flex alignment - Horizontal</Heading>
        </Container>
        <Container>
          <Heading rank={3}>Start</Heading>
          <Flex horizontal="start">
            <Flex.Item size={3}>
              <div>Justified to start</div>
            </Flex.Item>
            <Flex.Item size={3}>
              <div>Justified to start</div>
            </Flex.Item>
            <Flex.Item size={3}>
              <div>Justified to start</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>Center</Heading>
          <Flex horizontal="center">
            <Flex.Item size={3}>
              <div>Stacked center</div>
            </Flex.Item>
            <Flex.Item size={3}>
              <div>Stacked center</div>
            </Flex.Item>
            <Flex.Item size={3}>
              <div>Stacked center</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>End</Heading>
          <Flex horizontal="end">
            <Flex.Item size={3}>
              <div>Stacked right</div>
            </Flex.Item>
            <Flex.Item size={3}>
              <div>Stacked right</div>
            </Flex.Item>
            <Flex.Item size={3}>
              <div>Stacked right</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>Equal</Heading>
          <Flex horizontal="equal">
            <Flex.Item size={3}>
              <div>Equal-spaced</div>
            </Flex.Item>
            <Flex.Item size={3}>
              <div>Equal-spaced</div>
            </Flex.Item>
            <Flex.Item size={3}>
              <div>Equal-spaced</div>
            </Flex.Item>
          </Flex>
        </Container>
      </Page.Section>
      <Page.Section name="flex-spacing">
        <Container>
          <Heading rank={2}>Flex spacing</Heading>
        </Container>
        <Container>
          <Heading rank={3}>None</Heading>
          <Flex spacing="none">
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>X-Small</Heading>
          <Flex spacing="xsmall">
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>Small</Heading>
          <Flex spacing="small">
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>Medium</Heading>
          <Flex spacing="medium">
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>Large</Heading>
          <Flex spacing="large">
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>X-Large</Heading>
          <Flex spacing="xlarge">
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
            <Flex.Item>
              <div>Item</div>
            </Flex.Item>
          </Flex>
        </Container>
      </Page.Section>
      <Page.Section name="item-size">
        <Container>
          <Heading rank={2}>Item size</Heading>
        </Container>
        <Container>
          <Heading rank={3}>4 + 4 + 4</Heading>
          <Flex>
            <Flex.Item size={4}>
              <div>4X item</div>
            </Flex.Item>
            <Flex.Item size={4}>
              <div>4X item</div>
            </Flex.Item>
            <Flex.Item size={4}>
              <div>4X item</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>3 + 6 + 3</Heading>
          <Flex>
            <Flex.Item size={3}>
              <div>3X item</div>
            </Flex.Item>
            <Flex.Item size={6}>
              <div>6X item</div>
            </Flex.Item>
            <Flex.Item size={3}>
              <div>3X item</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>3 + 2 + auto</Heading>
          <Flex>
            <Flex.Item size={3}>
              <div>3X item</div>
            </Flex.Item>
            <Flex.Item size={2}>
              <div>2X item</div>
            </Flex.Item>
            <Flex.Item size="auto">
              <div>Auto-sized item</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>auto + auto + auto</Heading>
          <Flex>
            <Flex.Item size="auto">
              <div>Auto-sized item</div>
            </Flex.Item>
            <Flex.Item size="auto">
              <div>Auto-sized item</div>
            </Flex.Item>
            <Flex.Item size="auto">
              <div>Auto-sized item</div>
            </Flex.Item>
          </Flex>
        </Container>
      </Page.Section>
      <Page.Section name="item-offset">
        <Container>
          <Heading rank={2}>Item offset</Heading>
        </Container>
        <Container>
          <Heading rank={3}>4 + 2 (offset) + 6</Heading>
          <Flex>
            <Flex.Item size={4}>
              <div>4X item</div>
            </Flex.Item>
            <Flex.Item size={6} offset={2}>
              <div>6X item with 2X offset</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>2 (offset) + 10</Heading>
          <Flex>
            <Flex.Item size={10} offset={2}>
              <div>10X item with 2X offset</div>
            </Flex.Item>
          </Flex>
        </Container>
        <Container>
          <Heading rank={3}>2 + 4 (offset) + auto</Heading>
          <Flex>
            <Flex.Item size={2}>
              <div>2X item</div>
            </Flex.Item>
            <Flex.Item size="auto" offset={4}>
              <div>Auto-sized item with 4X offset</div>
            </Flex.Item>
          </Flex>
        </Container>
      </Page.Section>
      <Page.Section name="responsiveness">
        <Container>
          <Heading rank={2}>Responsiveness</Heading>
        </Container>
        <Container>
          <Heading rank={3}>Variable item sizes</Heading>
          <p>Items below are 2X on x-large, 3X on large, 4X on medium, 6X on small, 12X on x-small.</p>
          <Flex willWrap>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
            <Flex.Item sizeXS={12} sizeS={6} sizeM={4} sizeL={3} sizeXL={2}>
              <div>Responsive item</div>
            </Flex.Item>
          </Flex>
        </Container>
      </Page.Section>
    </Page>
  )
}

// Export
export default Layout
