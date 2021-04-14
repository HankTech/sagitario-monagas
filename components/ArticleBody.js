import Typography from '@material-ui/core/Typography'

const ArticleBody = ({ content }) => {
  return (
    
    <Typography component="div" variant="body1" align="justify">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Typography>
    
  )
}

export default ArticleBody