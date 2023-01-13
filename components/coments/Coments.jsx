import Image from 'next/image'
import likes from '../../public/like.png'
import comment from '../../public/comment.png'
import likeFill from '../../public/likeFill.png'
import { useState } from 'react'

const Coments = () => {
  const [like , setLike] = useState(true);
  const [count, setCount] = useState(7)

  const handleClick = () => {
    setLike(!like)
    if(like===true){
      return setCount(count+1)
    }else{
      return setCount(count-1)
    }
  }
  return (
    <>
      <div className="coments">
        <div className="container">
          <div className="circle">

          </div>
          <div className="name">
            <h3>
              Adakos
            </h3>
            <h5>
              @adakos
            </h5>
            <h6>
              hace 1 min
            </h6>
          </div>
        </div>
        <div className="text">
          <p>Lorem ipsum dolor sit amet . Nostrum omnis hic facilis quasi molestiae, ea eum eius, magni impedit odio dolorem unde vol</p>
        </div>
        <div className='likeAndComments'>
          <div className='like'>
            <Image onClick={handleClick} width={30} height={30} src={like ? likes : likeFill} alt={'like'} />
            <h5>{count }</h5>
          </div>
          <div className='like'>
            <Image width={30} height={30} src={comment} alt={comment}/>
            <h5>3</h5>
          </div>

        </div>

      </div>

    </>

  )
}

export default Coments;