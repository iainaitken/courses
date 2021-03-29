RSpec.describe 'doubles' do
  it "tests the student's knowledge of the course's content" do
    db = double(:database_connection, connect: true, disconnect: "Goodbye")

    expect(db.connect).to eq true
    expect(db.disconnect).to eq "Goodbye"

    fs = double(:file_system)
    allow(fs).to receive_messages(read: "Romeo and Juliet", write: false)

    expect(fs.read).to eq "Romeo and Juliet"
    expect(fs.write).to eq(false)
  end
end