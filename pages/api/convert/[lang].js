import { titleCase } from 'title-case'
import { convert } from 'titlecase-french'

export default function langHandler(req, res) {
  const { lang } = req.query
  const { text } = req.body
  const supportedLangs = ['en', 'de', 'fr']

  if (!supportedLangs.includes(lang)) {
    return res.status(501).json({ message: 'This language is not supported' })
  }

  switch (lang) {
    case 'en':
      try {
        const result = titleCase(text)
        res.status(200).json({ convertedText: result })
      } catch (e) {
        res
          .status(500)
          .json({ message: 'Error occurred while processing your request' })
      }
    case 'de':
      try {
        const result = ''
        res.status(200).json({ convertedText: result })
      } catch (e) {
        res
          .status(500)
          .json({ message: 'Error occurred while processing your request' })
      }
    case 'fr':
      try {
        const result = convert(text)
        res.status(200).json({ convertedText: result })
      } catch (e) {
        res
          .status(500)
          .json({ message: 'Error occurred while processing your request' })
      }
  }
}
