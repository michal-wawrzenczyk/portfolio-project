import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { gallerySelectors } from '../../../../store/selectors/selectors';
import { setSelectedPhoto } from '../../../../store/slices/gallery';
import { MediaCard } from '../MediaCard/MediaCard';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0.25rem;

  img {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export interface PhotoItemProps {
  photoUrl: string;
  photoId: number;
  author: string;
  species: string;
  description?: string;
  location?: object;
}

export const PhotoItem: React.FC<PhotoItemProps> = ({
  // photoUrl,
  photoId
  // author,
  // species,
  // description = '',
  // location = null
}) => {
  const dispatch = useDispatch();
  const photoData = useSelector(
    gallerySelectors.getSelectedPhotoById(String(photoId))
  );

  // TODO - poprawic || ''
  const showCardDetails = (): void => {
    dispatch(
      setSelectedPhoto({
        author: photoData?.author || '',
        species: photoData?.species || '',
        description: photoData?.description ?? '',
        location: photoData?.location ?? {},
        photoUrl: photoData?.photoUrl || '',
        photoId: photoId,
        avgValue: photoData?.avgValue || null,
        ratingValues: photoData?.ratingValues || []
      })
    );
  };

  return (
    <Card>
      <MediaCard photoId={photoId} showCardDetails={() => {}} />
    </Card>
  );
};
