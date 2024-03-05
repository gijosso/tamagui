import {
  H1,
  Paragraph,
  ScrollView,
  Separator,
  Stack,
  Text,
  YGroup,
  YStack,
} from 'tamagui'
import * as sections from '@tamagui/bento'
import { LinkListItem } from '../home/screen'

export function BentoScreen() {
  return (
    <ScrollView>
      <YStack bg="$color2" p="$3" pt="$6" pb="$8" f={1} space>
        <YGroup size="$4" key={i} separator={<Separator />}>
          {sections.listingData.sections.map(({ sectionName, parts }) => {
            return (
              <YGroup.Item key={'test'}>
                <LinkListItem bg="$color1" href={'test'} pressTheme size="$4">
                  {'test'}
                </LinkListItem>
              </YGroup.Item>
            )
          })}
        </YGroup>

        {demos.map((group, i) => {
          return (
            <YGroup size="$4" key={i} separator={<Separator />}>
              {group.pages.map((page) => {
                return (
                  <YGroup.Item key={page.route}>
                    <LinkListItem bg="$color1" href={page.route} pressTheme size="$4">
                      {page.title}
                    </LinkListItem>
                  </YGroup.Item>
                )
              })}
            </YGroup>
          )
        })}
      </YStack>
    </ScrollView>
  )
}

const demos = [
  {
    pages: [
      { title: 'Sandbox', route: '/sandbox' },
      {
        title: 'Test Cases',
        route: '/tests',
      },
    ],
  },
  {
    pages: [
      { title: 'Stacks', route: '/demo/stacks' },
      { title: 'Headings', route: '/demo/headings' },
      { title: 'Paragraph', route: '/demo/text' },
      { title: 'Animations', route: '/demo/animations' },
      { title: 'Themes', route: '/demo/themes' },
    ],
  },

  {
    label: 'Forms',
    pages: [
      { title: 'Button', route: '/demo/button' },
      { title: 'Checkbox', route: '/demo/checkbox' },
      { title: 'Form', route: '/demo/forms' },
      { title: 'Input + Textarea', route: '/demo/inputs' },
      { title: 'Label', route: '/demo/label' },
      { title: 'Progress', route: '/demo/progress' },
      { title: 'Select', route: '/demo/select' },
      { title: 'Slider', route: '/demo/slider' },
      { title: 'Switch', route: '/demo/switch' },
      { title: 'RadioGroup', route: '/demo/radio-group' },
      { title: 'ToggleGroup', route: '/demo/toggle-group' },
    ],
  },

  {
    label: 'Panels',
    pages: [
      { title: 'AlertDialog', route: '/demo/alert-dialog' },
      { title: 'Dialog', route: '/demo/dialog' },
      { title: 'Popover', route: '/demo/popover' },
      { title: 'Sheet', route: '/demo/sheet' },
      { title: 'Toast', route: '/demo/toast' },
    ],
  },

  {
    label: 'Content',
    pages: [
      { title: 'Avatar', route: '/demo/avatar' },
      { title: 'Card', route: '/demo/card' },
      { title: 'Group', route: '/demo/group' },
      { title: 'Image', route: '/demo/image' },
      { title: 'ListItem', route: '/demo/list-item' },
      { title: 'Tabs', route: '/demo/tabs' },
      { title: 'Tabs Advanced', route: '/demo/tabs-advanced' },
    ],
  },

  {
    label: 'Visual',
    pages: [
      { title: 'LinearGradient', route: '/demo/linear-gradient' },
      { title: 'Separator', route: '/demo/separator' },
      { title: 'Square + Circle', route: '/demo/shapes' },
    ],
  },

  {
    label: 'Etc',
    pages: [
      { title: 'Spinner', route: '/demo/spinner' },
      { title: 'ScrollView', route: '/demo/scroll-view' },
    ],
  },
]
